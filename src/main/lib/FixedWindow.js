import Settings from '../util/Settings';
import debounce from './debounce';
import Event from '../util/Event';
import Util from '../util/Util';

const CLS_FIXED_WINDOW = 'fixed-window-open';

export const EVENT_BEFORE_FIXED_ADD = 'flexcss.fixedWindow.beforeAdd';
export const EVENT_AFTER_FIXED_REMOVE = 'flexcss.fixedWindow.afterRemove';

/**
 * @type {string}
 */
export const ALLOW_ELEMENT_OVERFLOW_TOUCH = 'data-overflow';

/**
 * @type {FixedWindow}
 */
let fixedWindowInstance;

export default class FixedWindow {

    constructor() {
        this.widgets = [];
        this.currentScrollTop = 0;
        this.fixedScreenConstraints = [];
        this.windowWidth = 0;
        this.isFixedWindowActive = false;
        this.touchListener = null;
    }

    /**
     * Adds a constraint to detect if the window needs to be changed when the screensize changes
     *
     * @param {Function} widget
     * @param {Function} fixedBreakpointFn gets a width argument, return true to open a window
     */
    addScreenConstraint(widget, fixedBreakpointFn) {
        this.fixedScreenConstraints[widget] = fixedBreakpointFn;
    }

    /**
     * @returns {null|DestroyableWidget}
     */
    getCurrentWidget() {
        return this.widgets.length > 0 ? this.widgets[this.widgets.length - 1] : null;
    }

    getLastFixedWidget() {
        let length = this.widgets.length;
        let widget = null;
        while (length > 0) {
            const thisWidget = this.widgets[length - 1];
            if (thisWidget.fixed) {
                widget = thisWidget;
                break;
            }
            length--;
        }
        return widget;
    }

    /**
     * @private
     */
    _checkFixedNeeded() {
        if (this.widgets.length === 0) {
            return;
        }
        const widgets = new Set(this.widgets);
        const widgetsThatRequireFixedWindow = Array.from(widgets).some(el => {
            const { widget } = el;
            const isFixed = this.fixedScreenConstraints[widget] &&
              this.fixedScreenConstraints[widget](this.windowWidth, this.getCurrentWidget());
            const index = this.widgets.indexOf(el);
            this.widgets[index] = Object.assign(el, { fixed: isFixed });
            return isFixed;
        });
        if (!widgetsThatRequireFixedWindow) {
            this._removeFixedContainer();
        } else {
            this._addFixedContainer();
        }
    }

    /**
     * @private
     */
    _addFixedContainer() {
        if (this.isFixedWindowActive) {
            return;
        }
        Event.dispatchAndFire(global.document, EVENT_BEFORE_FIXED_ADD, {
            detail: this.getCurrentWidget()
        });
        // this causes layout and should be optimized
        // At lest we write in a batch later
        Settings.get().scrollbarUpdateNodes.map((n) => {
            let foundProperty = 'paddingRight';
            let direction = 1;
            let node = n;
            if (n instanceof Array) {
                const [whatNode, property, d] = n;
                foundProperty = property;
                node = whatNode;
                direction = d || 1;
            }
            return {
                node,
                property: foundProperty,
                value: `${parseInt(global.getComputedStyle(node)[foundProperty], 10) +
                (!node.__fixedWindowMod__ ? (Settings.getScrollbarWidth() * direction) : 0)}px`
            };
        }).forEach((d) => {
            d.node.__fixedWindowMod__ = true;
            d.node.style[d.property] = d.value;
        });

        this.touchListener = (e) => {
            e.preventDefault();
        };

        let shouldNotMoveUp = false;
        let shouldNotMoveDown = false;
        let neverScroll = false;
        let lastClientY = 0;
        this.touchStartListener = (e) => {
            let { element } = this.getLastFixedWidget();
            const closestOverflow = Util.closestCallback(e.target,
              (el) => el instanceof HTMLTextAreaElement ||
              (el.hasAttribute && el.hasAttribute(ALLOW_ELEMENT_OVERFLOW_TOUCH)));
            if (closestOverflow && closestOverflow.scrollHeight !== closestOverflow.offsetHeight) {
                element = closestOverflow;
            }
            if (Util.isPartOfNode(e.target, element)) {
                neverScroll = element.scrollHeight === element.offsetHeight;
                lastClientY = e.touches[0].clientY;
                // never allow scrolling when there is nothing to scroll
                if (neverScroll) {
                    return false;
                }
                if (element.scrollTop === 0) {
                    shouldNotMoveUp = true;
                } else if (element.scrollHeight === element.scrollTop + element.offsetHeight) {
                    shouldNotMoveDown = true;
                }
            }
        };

        global.addEventListener('touchmove', this.touchListener);
        global.document.body.addEventListener('touchstart', this.touchStartListener);

        this.touchMoveListener = (e) => {
            const { element } = this.getLastFixedWidget();
            if (Util.isPartOfNode(e.target, element)) {
                const { clientY } = e.touches[0];
                const isScrollingDown = (lastClientY - clientY) > 0;
                lastClientY = clientY;
                if (neverScroll) {
                    return false;
                }
                if ((!shouldNotMoveDown && isScrollingDown) ||
                    (shouldNotMoveDown && !isScrollingDown) ||
                    (!shouldNotMoveDown && !shouldNotMoveUp && !isScrollingDown) ||
                    (shouldNotMoveDown && shouldNotMoveUp && isScrollingDown)
                ) {
                    e.stopImmediatePropagation();
                }
            }
        };

        this.touchEndListener = () => {
            neverScroll = false;
            shouldNotMoveUp = false;
            shouldNotMoveDown = false;
            lastClientY = 0;
        };

        global.document.body.addEventListener('touchmove', this.touchMoveListener);
        global.document.body.addEventListener('touchend', this.touchEndListener);
        global.document.documentElement.classList.add(CLS_FIXED_WINDOW);
        this.isFixedWindowActive = true;
    }

    /**
     * @private
     */
    _removeFixedContainer() {
        if (this.isFixedWindowActive) {
            // cleanup event listeners
            global.removeEventListener('touchmove', this.touchListener);
            global.document.body.removeEventListener('touchstart', this.touchStartListener);
            global.document.body.removeEventListener('touchmove', this.touchMoveListener);
            global.document.body.removeEventListener('touchend', this.touchEndListener);

            // reset scrollbar nodes
            Settings.get().scrollbarUpdateNodes.forEach((node) => {
                if (node instanceof Array) {
                    const [whatNode, property] = node;
                    delete whatNode.__fixedWindowMod__;
                    whatNode.style[property] = '';
                } else {
                    delete node.__fixedWindowMod__;
                    node.style.paddingRight = '';
                }
            });
            global.document.documentElement.classList.remove(CLS_FIXED_WINDOW);
            Event.dispatchAndFire(global.document, EVENT_AFTER_FIXED_REMOVE);
            this.isFixedWindowActive = false;
        }
    }

    /**
     * Will close a window when no widgets are opened that need one
     */
    resizeListener() {
        this.windowWidth = global.innerWidth;
        this._checkFixedNeeded();
    }

    /**
     * @returns {FixedWindow}
     */
    static getInstance() {
        if (!fixedWindowInstance) {
            fixedWindowInstance = new FixedWindow();
            fixedWindowInstance.windowWidth = global.innerWidth;
            const eventHandler = fixedWindowInstance.resizeListener.bind(fixedWindowInstance);
            global.addEventListener(
                'resize',
                debounce(eventHandler, 500)
            );
            global.addEventListener('orientationchange', eventHandler);
        }
        return fixedWindowInstance;
    }

    /**
     * Request a close of the fixed window
     */
    close() {
        this.widgets.pop();
        this._checkFixedNeeded();
        if (this.widgets.length === 0) {
            this._removeFixedContainer();
        }
    }

    /**
     * Request to open a fixed windows
     * @param {Object|DestroyableWidget} instance
     * @param {HTMLElement} element
     */
    open(instance, element) {
        let fixed = false;
        if (typeof instance === 'object') {
            const widget = instance.constructor;
            const fixedWidget = this.fixedScreenConstraints[instance.constructor];
            if (widget && fixedWidget) {
                fixed = fixedWidget(this.windowWidth, instance);
            }
            this.widgets.push(
                {
                    widget,
                    element,
                    fixed
                }
            );
            // open a new window if there is no window active
            if (!this.isFixedWindowActive && fixed) {
                this._addFixedContainer();
            }
        }
    }
}
