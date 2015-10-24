(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FlexCss"] = factory();
	else
		root["FlexCss"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(112);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(15)
	  , defined = __webpack_require__(17);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(16);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 20 */
/***/ function(module, exports) {

	var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	module.exports = global;
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(12).getDesc
	  , isObject = __webpack_require__(30)
	  , anObject = __webpack_require__(31);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(32)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// http://jsperf.com/core-js-isobject
	module.exports = function(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(33);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(35)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(58);
	__webpack_require__(62);
	module.exports = __webpack_require__(21).Promise;

/***/ },
/* 40 */
/***/ function(module, exports) {



/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(42)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(44)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(43)
	  , defined   = __webpack_require__(17);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(45)
	  , $def            = __webpack_require__(19)
	  , $redef          = __webpack_require__(46)
	  , hide            = __webpack_require__(47)
	  , has             = __webpack_require__(50)
	  , SYMBOL_ITERATOR = __webpack_require__(51)('iterator')
	  , Iterators       = __webpack_require__(54)
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(55)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(12).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(56)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * __webpack_require__(57), NAME, methods);
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(47);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(12)
	  , createDesc = __webpack_require__(48);
	module.exports = __webpack_require__(49) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 50 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(52)('wks')
	  , Symbol = __webpack_require__(20).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(53))('Symbol.' + name));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(20)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(12)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(47)(IteratorPrototype, __webpack_require__(51)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(48)(1,next)});
	  __webpack_require__(56)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(50)
	  , hide = __webpack_require__(47)
	  , TAG  = __webpack_require__(51)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// Safari has buggy iterators w/o `next`
	module.exports = 'keys' in [] && !('next' in [].keys());

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var Iterators = __webpack_require__(54);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(60)
	  , step       = __webpack_require__(61)
	  , Iterators  = __webpack_require__(54)
	  , toIObject  = __webpack_require__(14);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(44)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(12)
	  , LIBRARY    = __webpack_require__(45)
	  , global     = __webpack_require__(20)
	  , ctx        = __webpack_require__(32)
	  , classof    = __webpack_require__(63)
	  , $def       = __webpack_require__(19)
	  , isObject   = __webpack_require__(30)
	  , anObject   = __webpack_require__(31)
	  , aFunction  = __webpack_require__(33)
	  , strictNew  = __webpack_require__(64)
	  , forOf      = __webpack_require__(65)
	  , setProto   = __webpack_require__(29).set
	  , same       = __webpack_require__(70)
	  , species    = __webpack_require__(71)
	  , SPECIES    = __webpack_require__(51)('species')
	  , RECORD     = __webpack_require__(53)('record')
	  , asap       = __webpack_require__(72)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(49)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var isPromise = function(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      asap(function(){
	        if(isUnhandled(record.p)){
	          if(isNode){
	            process.emit('unhandledRejection', value, record.p);
	          } else if(global.console && console.error){
	            console.error('Unhandled promise rejection', value);
	          }
	        }
	        record.a = undefined;
	      });
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(77)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = aFunction(res);
	        react.rej = aFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(56)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(21)[PROMISE]);
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(78)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(16)
	  , TAG = __webpack_require__(51)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(32)
	  , call        = __webpack_require__(66)
	  , isArrayIter = __webpack_require__(67)
	  , anObject    = __webpack_require__(31)
	  , toLength    = __webpack_require__(68)
	  , getIterFn   = __webpack_require__(69);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(31);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(51)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(43)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(63)
	  , ITERATOR  = __webpack_require__(51)('iterator')
	  , Iterators = __webpack_require__(54);
	module.exports = __webpack_require__(21).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(12)
	  , SPECIES = __webpack_require__(51)('species');
	module.exports = function(C){
	  if(__webpack_require__(49) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , macrotask = __webpack_require__(73).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , head, last, notify;
	
	function flush(){
	  while(head){
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    head = head.next;
	  } last = undefined;
	}
	
	// Node.js
	if(__webpack_require__(16)(process) == 'process'){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(32)
	  , invoke             = __webpack_require__(74)
	  , html               = __webpack_require__(75)
	  , cel                = __webpack_require__(76)
	  , global             = __webpack_require__(20)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(16)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScript){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "module.exports = require('./$.global').document && document.documentElement;";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30)
	  , document = __webpack_require__(20).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(46);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(51)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	module.exports = __webpack_require__(21).Object.assign;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(19);
	$def($def.S, 'Object', {assign: __webpack_require__(82)});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var toObject = __webpack_require__(83)
	  , IObject  = __webpack_require__(15)
	  , enumKeys = __webpack_require__(84);
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = toObject(target)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = IObject(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(17);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(12);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(34)["default"];
	
	var _classCallCheck = __webpack_require__(37)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var PFX = ["webkit", "moz", "MS", "o", ""];
	
	var COL_LEFT_CLASS = 'is-collision-left';
	
	var COL_RIGHT_CLASS = 'is-collision-right';
	
	var COL_BOTTOM_CLASS = 'is-collision-bottom';
	
	/**
	 * Provides shared DOM-Utility functions
	 */
	
	var Util = (function () {
	    function Util() {
	        _classCallCheck(this, Util);
	    }
	
	    _createClass(Util, null, [{
	        key: "prefixedAnimateEvent",
	
	        /**
	         * Will register the right animation event based on browser
	         * @param element
	         * @param type
	         * @param callback
	         */
	        value: function prefixedAnimateEvent(element, type, callback) {
	            var thisFunction = function thisFunction(e) {
	                callback.apply(element, [e, thisFunction]);
	            };
	
	            for (var p = 0; p < PFX.length; p++) {
	                if (!PFX[p]) {
	                    type = type.toLowerCase();
	                }
	                var name = PFX[p] + type;
	                element.addEventListener(name, thisFunction, true);
	            }
	        }
	
	        /**
	         * Get correct transitionend event
	         * @returns {String}
	         * @private
	         */
	    }, {
	        key: "whichTransitionEndEvent",
	        value: function whichTransitionEndEvent() {
	            var t = undefined;
	            var el = document.createElement('fake');
	
	            var transitions = {
	                'transition': 'transitionend',
	                'OTransition': 'oTransitionEnd',
	                'MozTransition': 'transitionend',
	                'WebkitTransition': 'webkitTransitionEnd'
	            };
	
	            for (t in transitions) {
	                if (el.style[t] !== undefined) {
	                    return transitions[t];
	                }
	            }
	        }
	
	        /**
	         * Check if target is part of parent node
	         * @param target
	         * @param parent
	         * @returns {boolean}
	         */
	    }, {
	        key: "isPartOfNode",
	        value: function isPartOfNode(target, parent) {
	            if (!target || !parent) {
	                return false;
	            }
	            var now = target;
	            while (now !== parent && now !== null) {
	                if (now === parent) {
	                    break;
	                }
	                now = now.parentNode;
	            }
	            return now !== null;
	        }
	
	        /**
	         * Walks the tree until func returns true for given argument
	         * @param target
	         * @param func
	         * @returns {boolean|HTMLElement}
	         */
	    }, {
	        key: "parentsUntil",
	        value: function parentsUntil(target, func) {
	            if (!target) {
	                return false;
	            }
	            var now = target;
	            while (!func(now) && now !== null) {
	                now = now.parentNode;
	            }
	
	            return now;
	        }
	
	        /**
	         * Generates a unique id
	         * @return {String}
	         */
	    }, {
	        key: "guid",
	        value: function guid() {
	            function s4() {
	                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	            }
	
	            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	        }
	
	        /**
	         * Detects scrollbar width
	         * @see http://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes
	         * @returns {number}
	         */
	    }, {
	        key: "getScrollBarWidth",
	        value: function getScrollBarWidth() {
	
	            var doc = global.document,
	                inner = doc.createElement('p');
	            inner.style.width = "100%";
	            inner.style.height = "200px";
	
	            var outer = doc.createElement('div');
	            outer.style.position = "absolute";
	            outer.style.top = "0px";
	            outer.style.left = "0px";
	            outer.style.visibility = "hidden";
	            outer.style.width = "200px";
	            outer.style.height = "150px";
	            outer.style.overflow = "hidden";
	            outer.appendChild(inner);
	
	            doc.body.appendChild(outer);
	            var w1 = inner.offsetWidth;
	            outer.style.overflow = 'scroll';
	            var w2 = inner.offsetWidth;
	            if (w1 === w2) {
	                w2 = outer.clientWidth;
	            }
	            doc.body.removeChild(outer);
	
	            return w1 - w2;
	        }
	
	        /**
	         * Run an event once
	         * @param {String} ev
	         * @param {HTMLElement|HTMLDocument} target
	         * @param {Function} func
	         * @param {boolean} [capture]
	         */
	    }, {
	        key: "addEventOnce",
	        value: function addEventOnce(ev, target, func, capture) {
	            var thisFunction = function thisFunction(event) {
	                func(event, func);
	                target.removeEventListener(ev, thisFunction, capture);
	            };
	            return target.addEventListener(ev, thisFunction, capture);
	        }
	
	        /**
	         * Checks if an element is visible
	         * @param {HTMLElement} element
	         * @returns bool
	         */
	    }, {
	        key: "isVisible",
	        value: function isVisible(element) {
	            return element.offsetWidth > 0 && element.offsetHeight > 0;
	        }
	
	        /**
	         * Creates a camelCaseRepresentation of a dashed string
	         * @param {String} str
	         * @returns String
	         */
	    }, {
	        key: "dashToCamelCase",
	        value: function dashToCamelCase(str) {
	            return str.replace(/-([a-z])/g, function (g) {
	                return g[1].toUpperCase();
	            });
	        }
	
	        /**
	         * Creates a copy of `input`
	         * @param {*} input
	         * @return *
	         */
	    }, {
	        key: "copy",
	        value: function copy(input) {
	            return JSON.parse(JSON.stringify(input));
	        }
	
	        /**
	         * Reads options from element (data attributes) and applies to base
	         * @param {HTMLElement} element
	         * @param {Object} base
	         * @return {Object}
	         */
	    }, {
	        key: "applyOptionsFromElement",
	        value: function applyOptionsFromElement(element, base) {
	            if (!element) {
	                return base;
	            }
	            var attrs = element.attributes;
	            for (var i = 0; i < attrs.length; i++) {
	                var attr = attrs[i];
	                if (attr) {
	                    var s = Util.dashToCamelCase(attr.nodeName.replace('data-', '')),
	                        val = attr.nodeValue;
	                    if (base.hasOwnProperty(s)) {
	                        // skip functions
	                        if (typeof base[s] === 'function') {
	                            continue;
	                        }
	                        if (typeof base[s] === 'boolean') {
	                            base[s] = parseInt(val || 1) === 1;
	                        } else {
	                            base[s] = val;
	                        }
	                    }
	                }
	            }
	            return base;
	        }
	
	        /**
	         * Will position an element directly at given target
	         * Is aware of a given collision container to detect edges
	         * Will put elementToPosition either to left, center or right edge (prefer right)
	         *  and either to bottom or top (prefers bottom)
	         *
	         * You may overwrite preferred positioned with `centerHorizontal` and `positionTop`
	         *
	         * @param {HTMLElement} target the target container to align to
	         * @param {HTMLElement} elementToPosition the element to position
	         * @param {HTMLElement} collisionContainer the outer container to prevent collisions
	         * @param {bool} [centerHorizontal] set true to center element, otherwise it's put on the right border by default
	         * @param {bool} [positionTop] flip top, by default element is positioned to the bottom.
	         * @returns {HTMLElement}
	         */
	    }, {
	        key: "setupPositionNearby",
	        value: function setupPositionNearby(target, elementToPosition, collisionContainer, centerHorizontal, positionTop) {
	
	            // determine relative offsets
	            var amountTop = 0,
	                amountLeft = 0;
	            Util.parentsUntil(target.parentNode, function (el) {
	                if (!(el instanceof HTMLElement)) {
	                    return false;
	                }
	                var style = window.getComputedStyle(el);
	                if (Util.isPartOfNode(elementToPosition, el)) {
	                    if (style && style.position === 'relative') {
	                        amountTop += el.offsetTop || 0;
	                        amountLeft += el.offsetLeft || 0;
	                    }
	                    return false;
	                } else {
	                    return true;
	                }
	            });
	
	            var targetPosition = target.getBoundingClientRect(),
	                elementRect = elementToPosition.getBoundingClientRect(),
	                colRect = collisionContainer.getBoundingClientRect(),
	                targetTop = targetPosition.top - amountTop,
	                targetRight = targetPosition.right,
	                isCollisionTop = targetTop - elementRect.height <= 0,
	                isCollisionBottom = window.innerHeight < targetTop + amountTop + targetPosition.height + elementRect.height,
	                isCollisionLeft = targetRight < elementRect.width,
	                targetLeft = targetPosition.left,
	                isCollisionRight = targetLeft + elementRect.width > colRect.width,
	                classList = elementToPosition.classList;
	
	            classList.remove(COL_RIGHT_CLASS);
	            classList.remove(COL_LEFT_CLASS);
	            classList.remove(COL_BOTTOM_CLASS);
	
	            var calcTop = undefined,
	                calcLeft = undefined;
	            if (isCollisionLeft && !isCollisionRight) {
	                // put element to left if collision with left
	                calcLeft = targetPosition.left - colRect.left - amountLeft + 'px';
	                classList.add(COL_LEFT_CLASS);
	            } else {
	                // maybe center if no collision with either side
	                var rightPosition = targetRight - elementRect.width - colRect.left - amountLeft + 'px',
	                    leftCentered = (targetLeft + targetPosition.width / 2 - elementRect.width / 2 || 0) - colRect.left,
	                    collisionCentered = leftCentered + elementRect.width > colRect.width;
	                if (centerHorizontal && !collisionCentered) {
	                    calcLeft = leftCentered + 'px';
	                } else {
	                    classList.add(COL_RIGHT_CLASS);
	                    calcLeft = rightPosition;
	                }
	            }
	
	            if (isCollisionBottom || positionTop && !isCollisionTop) {
	                // Put Element on top if collision
	                calcTop = targetTop - elementRect.height - colRect.top + 'px';
	                classList.add(COL_BOTTOM_CLASS);
	            } else {
	                calcTop = targetTop + targetPosition.height - colRect.top + 'px';
	            }
	
	            elementToPosition.style.cssText = "top:" + calcTop + ";left:" + calcLeft + ";";
	
	            return elementToPosition;
	        }
	
	        /**
	         * Brings a given element into viewport
	         * @param {HTMLElement} el
	         * @param {int|function}[optionalOffset]
	         */
	    }, {
	        key: "scrollToElement",
	        value: function scrollToElement(el, optionalOffset) {
	            el.scrollIntoView();
	            // optionally use a additional scrollDif
	            if (optionalOffset) {
	                if (typeof optionalOffset === 'function') {
	                    optionalOffset = optionalOffset();
	                }
	                if (optionalOffset > 0) {
	                    var scrolledY = window.scrollY || window.pageYOffset;
	                    if (scrolledY) {
	                        window.scroll(0, scrolledY - optionalOffset);
	                    }
	                }
	            }
	        }
	    }]);
	
	    return Util;
	})();
	
	exports["default"] = Util;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvVXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsWUFBWSxDQUFDOzs7Ozs7Ozs7QUFFYixJQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFN0MsSUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUM7O0FBRTNDLElBQU0sZUFBZSxHQUFHLG9CQUFvQixDQUFDOztBQUU3QyxJQUFNLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDOzs7Ozs7SUFNekMsSUFBSTthQUFKLElBQUk7OEJBQUosSUFBSTs7O2lCQUFKLElBQUk7Ozs7Ozs7OztlQVFxQiw4QkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNqRCxnQkFBTSxZQUFZLEdBQUcsU0FBZixZQUFZLENBQWEsQ0FBQyxFQUFFO0FBQzlCLHdCQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUM7O0FBRUYsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDLG9CQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ1Qsd0JBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQzdCO0FBQ0Qsb0JBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDekIsdUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVB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RCxvQkFBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFO0FBQ3BCLHdCQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdkQsd0JBQUksU0FBUyxFQUFFO0FBQ1gsOEJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQztxQkFDaEQ7aUJBQ0o7YUFDSjtTQUNKOzs7V0FwVEMsSUFBSTs7O3FCQUFKLElBQUkiLCJmaWxlIjoiL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvbm9kZV9tb2R1bGVzL2VzbGludC1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvc3JjL21haW4vdXRpbC9VdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgUEZYID0gW1wid2Via2l0XCIsIFwibW96XCIsIFwiTVNcIiwgXCJvXCIsIFwiXCJdO1xuXG5jb25zdCBDT0xfTEVGVF9DTEFTUyA9ICdpcy1jb2xsaXNpb24tbGVmdCc7XG5cbmNvbnN0IENPTF9SSUdIVF9DTEFTUyA9ICdpcy1jb2xsaXNpb24tcmlnaHQnO1xuXG5jb25zdCBDT0xfQk9UVE9NX0NMQVNTID0gJ2lzLWNvbGxpc2lvbi1ib3R0b20nO1xuXG4vKipcbiAqIFByb3ZpZGVzIHNoYXJlZCBET00tVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIFV0aWwge1xuXG4gICAgLyoqXG4gICAgICogV2lsbCByZWdpc3RlciB0aGUgcmlnaHQgYW5pbWF0aW9uIGV2ZW50IGJhc2VkIG9uIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3RhdGljIHByZWZpeGVkQW5pbWF0ZUV2ZW50KGVsZW1lbnQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHRoaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShlbGVtZW50LCBbZSwgdGhpc0Z1bmN0aW9uXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBQRlgubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgIGlmICghUEZYW3BdKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuYW1lID0gUEZYW3BdICsgdHlwZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCB0aGlzRnVuY3Rpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvcnJlY3QgdHJhbnNpdGlvbmVuZCBldmVudFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgd2hpY2hUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2UnKTtcblxuICAgICAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAgICAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgICAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh0IGluIHRyYW5zaXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRhcmdldCBpcyBwYXJ0IG9mIHBhcmVudCBub2RlXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNQYXJ0T2ZOb2RlKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICFwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm93ID0gdGFyZ2V0O1xuICAgICAgICB3aGlsZSAobm93ICE9PSBwYXJlbnQgJiYgbm93ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobm93ID09PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vdyA9IG5vdy5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub3cgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2Fsa3MgdGhlIHRyZWUgdW50aWwgZnVuYyByZXR1cm5zIHRydWUgZm9yIGdpdmVuIGFyZ3VtZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBmdW5jXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgc3RhdGljIHBhcmVudHNVbnRpbCh0YXJnZXQsIGZ1bmMpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm93ID0gdGFyZ2V0O1xuICAgICAgICB3aGlsZSAoIWZ1bmMobm93KSAmJiBub3cgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vdyA9IG5vdy5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgaWRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGd1aWQoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHM0KCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVjdHMgc2Nyb2xsYmFyIHdpZHRoXG4gICAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk4NjkzNy9ob3ctY2FuLWktZ2V0LXRoZS1icm93c2Vycy1zY3JvbGxiYXItc2l6ZXNcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRTY3JvbGxCYXJXaWR0aCgpIHtcblxuICAgICAgICBjb25zdCBkb2MgPSBnbG9iYWwuZG9jdW1lbnQsIGlubmVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiO1xuXG4gICAgICAgIGNvbnN0IG91dGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdXRlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgb3V0ZXIuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgb3V0ZXIuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMjAwcHhcIjtcbiAgICAgICAgb3V0ZXIuc3R5bGUuaGVpZ2h0ID0gXCIxNTBweFwiO1xuICAgICAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gICAgICAgIGNvbnN0IHcxID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgIGxldCB3MiA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgICAgICBpZiAodzEgPT09IHcyKSB7XG4gICAgICAgICAgICB3MiA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGRvYy5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgICAgICByZXR1cm4gKHcxIC0gdzIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUnVuIGFuIGV2ZW50IG9uY2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fEhUTUxEb2N1bWVudH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NhcHR1cmVdXG4gICAgICovXG4gICAgc3RhdGljIGFkZEV2ZW50T25jZShldiwgdGFyZ2V0LCBmdW5jLCBjYXB0dXJlKSB7XG4gICAgICAgIGNvbnN0IHRoaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIHRoaXNGdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZnVuYyhldmVudCwgZnVuYyk7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldiwgdGhpc0Z1bmN0aW9uLCBjYXB0dXJlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2LCB0aGlzRnVuY3Rpb24sIGNhcHR1cmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGlzIHZpc2libGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIHN0YXRpYyBpc1Zpc2libGUoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgJiYgZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjYW1lbENhc2VSZXByZXNlbnRhdGlvbiBvZiBhIGRhc2hlZCBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICogQHJldHVybnMgU3RyaW5nXG4gICAgICovXG4gICAgc3RhdGljIGRhc2hUb0NhbWVsQ2FzZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoZykge1xuICAgICAgICAgICAgcmV0dXJuIGdbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgYGlucHV0YFxuICAgICAqIEBwYXJhbSB7Kn0gaW5wdXRcbiAgICAgKiBAcmV0dXJuICpcbiAgICAgKi9cbiAgICBzdGF0aWMgY29weShpbnB1dCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbnB1dCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWRzIG9wdGlvbnMgZnJvbSBlbGVtZW50IChkYXRhIGF0dHJpYnV0ZXMpIGFuZCBhcHBsaWVzIHRvIGJhc2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJhc2VcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGFwcGx5T3B0aW9uc0Zyb21FbGVtZW50KGVsZW1lbnQsIGJhc2UpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdHRycyA9IGVsZW1lbnQuYXR0cmlidXRlcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHIgPSBhdHRyc1tpXTtcbiAgICAgICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHMgPSBVdGlsLmRhc2hUb0NhbWVsQ2FzZShhdHRyLm5vZGVOYW1lLnJlcGxhY2UoJ2RhdGEtJywgJycpKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gYXR0ci5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGJhc2UuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlW3NdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJhc2Vbc10gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVtzXSA9IHBhcnNlSW50KHZhbCB8fCAxKSA9PT0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2Vbc10gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2lsbCBwb3NpdGlvbiBhbiBlbGVtZW50IGRpcmVjdGx5IGF0IGdpdmVuIHRhcmdldFxuICAgICAqIElzIGF3YXJlIG9mIGEgZ2l2ZW4gY29sbGlzaW9uIGNvbnRhaW5lciB0byBkZXRlY3QgZWRnZXNcbiAgICAgKiBXaWxsIHB1dCBlbGVtZW50VG9Qb3NpdGlvbiBlaXRoZXIgdG8gbGVmdCwgY2VudGVyIG9yIHJpZ2h0IGVkZ2UgKHByZWZlciByaWdodClcbiAgICAgKiAgYW5kIGVpdGhlciB0byBib3R0b20gb3IgdG9wIChwcmVmZXJzIGJvdHRvbSlcbiAgICAgKlxuICAgICAqIFlvdSBtYXkgb3ZlcndyaXRlIHByZWZlcnJlZCBwb3NpdGlvbmVkIHdpdGggYGNlbnRlckhvcml6b250YWxgIGFuZCBgcG9zaXRpb25Ub3BgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgdGhlIHRhcmdldCBjb250YWluZXIgdG8gYWxpZ24gdG9cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50VG9Qb3NpdGlvbiB0aGUgZWxlbWVudCB0byBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbGxpc2lvbkNvbnRhaW5lciB0aGUgb3V0ZXIgY29udGFpbmVyIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2NlbnRlckhvcml6b250YWxdIHNldCB0cnVlIHRvIGNlbnRlciBlbGVtZW50LCBvdGhlcndpc2UgaXQncyBwdXQgb24gdGhlIHJpZ2h0IGJvcmRlciBieSBkZWZhdWx0XG4gICAgICogQHBhcmFtIHtib29sfSBbcG9zaXRpb25Ub3BdIGZsaXAgdG9wLCBieSBkZWZhdWx0IGVsZW1lbnQgaXMgcG9zaXRpb25lZCB0byB0aGUgYm90dG9tLlxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0dXBQb3NpdGlvbk5lYXJieSh0YXJnZXQsIGVsZW1lbnRUb1Bvc2l0aW9uLCBjb2xsaXNpb25Db250YWluZXIsIGNlbnRlckhvcml6b250YWwsIHBvc2l0aW9uVG9wKSB7XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIHJlbGF0aXZlIG9mZnNldHNcbiAgICAgICAgbGV0IGFtb3VudFRvcCA9IDAsIGFtb3VudExlZnQgPSAwO1xuICAgICAgICBVdGlsLnBhcmVudHNVbnRpbCh0YXJnZXQucGFyZW50Tm9kZSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgICAgIGlmIChVdGlsLmlzUGFydE9mTm9kZShlbGVtZW50VG9Qb3NpdGlvbiwgZWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlICYmIHN0eWxlLnBvc2l0aW9uID09PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFRvcCArPSBlbC5vZmZzZXRUb3AgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50TGVmdCArPSBlbC5vZmZzZXRMZWZ0IHx8IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgZWxlbWVudFJlY3QgPSBlbGVtZW50VG9Qb3NpdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIGNvbFJlY3QgPSBjb2xsaXNpb25Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICB0YXJnZXRUb3AgPSB0YXJnZXRQb3NpdGlvbi50b3AgLSBhbW91bnRUb3AsIHRhcmdldFJpZ2h0ID0gdGFyZ2V0UG9zaXRpb24ucmlnaHQsXG4gICAgICAgICAgICBpc0NvbGxpc2lvblRvcCA9ICh0YXJnZXRUb3AgLSBlbGVtZW50UmVjdC5oZWlnaHQpIDw9IDAsXG4gICAgICAgICAgICBpc0NvbGxpc2lvbkJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodCA8ICh0YXJnZXRUb3AgKyBhbW91bnRUb3AgKyB0YXJnZXRQb3NpdGlvbi5oZWlnaHQgKyBlbGVtZW50UmVjdC5oZWlnaHQpLFxuICAgICAgICAgICAgaXNDb2xsaXNpb25MZWZ0ID0gdGFyZ2V0UmlnaHQgPCBlbGVtZW50UmVjdC53aWR0aCwgdGFyZ2V0TGVmdCA9IHRhcmdldFBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICBpc0NvbGxpc2lvblJpZ2h0ID0gKHRhcmdldExlZnQgKyBlbGVtZW50UmVjdC53aWR0aCkgPiBjb2xSZWN0LndpZHRoLFxuICAgICAgICAgICAgY2xhc3NMaXN0ID0gZWxlbWVudFRvUG9zaXRpb24uY2xhc3NMaXN0O1xuXG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoQ09MX1JJR0hUX0NMQVNTKTtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShDT0xfTEVGVF9DTEFTUyk7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoQ09MX0JPVFRPTV9DTEFTUyk7XG5cbiAgICAgICAgbGV0IGNhbGNUb3AsIGNhbGNMZWZ0O1xuICAgICAgICBpZiAoaXNDb2xsaXNpb25MZWZ0ICYmICFpc0NvbGxpc2lvblJpZ2h0KSB7XG4gICAgICAgICAgICAvLyBwdXQgZWxlbWVudCB0byBsZWZ0IGlmIGNvbGxpc2lvbiB3aXRoIGxlZnRcbiAgICAgICAgICAgIGNhbGNMZWZ0ID0gKHRhcmdldFBvc2l0aW9uLmxlZnQgLSBjb2xSZWN0LmxlZnQgLSBhbW91bnRMZWZ0KSArICdweCc7XG4gICAgICAgICAgICBjbGFzc0xpc3QuYWRkKENPTF9MRUZUX0NMQVNTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1heWJlIGNlbnRlciBpZiBubyBjb2xsaXNpb24gd2l0aCBlaXRoZXIgc2lkZVxuICAgICAgICAgICAgdmFyIHJpZ2h0UG9zaXRpb24gPSAodGFyZ2V0UmlnaHQgLSBlbGVtZW50UmVjdC53aWR0aCAtIGNvbFJlY3QubGVmdCAtIGFtb3VudExlZnQpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBsZWZ0Q2VudGVyZWQgPSAoKHRhcmdldExlZnQgKyB0YXJnZXRQb3NpdGlvbi53aWR0aCAvIDIpIC1cbiAgICAgICAgICAgICAgICAgICAgKGVsZW1lbnRSZWN0LndpZHRoIC8gMikgfHwgMCkgLSBjb2xSZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uQ2VudGVyZWQgPSAobGVmdENlbnRlcmVkICsgZWxlbWVudFJlY3Qud2lkdGgpID4gY29sUmVjdC53aWR0aDtcbiAgICAgICAgICAgIGlmIChjZW50ZXJIb3Jpem9udGFsICYmICFjb2xsaXNpb25DZW50ZXJlZCkge1xuICAgICAgICAgICAgICAgIGNhbGNMZWZ0ID0gbGVmdENlbnRlcmVkICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0LmFkZChDT0xfUklHSFRfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIGNhbGNMZWZ0ID0gcmlnaHRQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0NvbGxpc2lvbkJvdHRvbSB8fCAocG9zaXRpb25Ub3AgJiYgIWlzQ29sbGlzaW9uVG9wKSkge1xuICAgICAgICAgICAgLy8gUHV0IEVsZW1lbnQgb24gdG9wIGlmIGNvbGxpc2lvblxuICAgICAgICAgICAgY2FsY1RvcCA9ICh0YXJnZXRUb3AgLSBlbGVtZW50UmVjdC5oZWlnaHQpIC0gY29sUmVjdC50b3AgKyAncHgnO1xuICAgICAgICAgICAgY2xhc3NMaXN0LmFkZChDT0xfQk9UVE9NX0NMQVNTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGNUb3AgPSAodGFyZ2V0VG9wICsgdGFyZ2V0UG9zaXRpb24uaGVpZ2h0KSAtIGNvbFJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRUb1Bvc2l0aW9uLnN0eWxlLmNzc1RleHQgPSBgdG9wOiR7Y2FsY1RvcH07bGVmdDoke2NhbGNMZWZ0fTtgO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50VG9Qb3NpdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmluZ3MgYSBnaXZlbiBlbGVtZW50IGludG8gdmlld3BvcnRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7aW50fGZ1bmN0aW9ufVtvcHRpb25hbE9mZnNldF1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2Nyb2xsVG9FbGVtZW50KGVsLCBvcHRpb25hbE9mZnNldCkge1xuICAgICAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAvLyBvcHRpb25hbGx5IHVzZSBhIGFkZGl0aW9uYWwgc2Nyb2xsRGlmXG4gICAgICAgIGlmIChvcHRpb25hbE9mZnNldCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25hbE9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsT2Zmc2V0ID0gb3B0aW9uYWxPZmZzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbE9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxlZFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbGVkWSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHNjcm9sbGVkWSAtIG9wdGlvbmFsT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 99 */,
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	/*global CustomEvent*/
	
	'use strict';
	
	// polyfill for custom events to make thinks work in IE
	// The needed polyfill is so small that I embedded it here
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	void (function () {
	    if (!global.CustomEvent || typeof global.CustomEvent !== 'function') {
	        var CustomEvent;
	        CustomEvent = function (event, params) {
	            var evt;
	            params = params || {
	                bubbles: false,
	                cancelable: false,
	                detail: undefined
	            };
	            evt = document.createEvent("CustomEvent");
	            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	            return evt;
	        };
	        CustomEvent.prototype = global.Event.prototype;
	        global.CustomEvent = CustomEvent;
	    }
	})();
	/**
	 * Simpler Event dispatching
	 */
	
	var EventHandler = (function () {
	
	    /**
	     * @param {HTMLElement} target
	     * @param {String} name
	     */
	
	    function EventHandler(target, name) {
	        _classCallCheck(this, EventHandler);
	
	        this.target = target;
	        this.defaultOptions = {
	            bubbles: true,
	            cancelable: true
	        };
	
	        this.name = name;
	    }
	
	    /**
	     * Set more options
	     * @param {Object} options
	     * @returns {EventHandler}
	     */
	
	    _createClass(EventHandler, [{
	        key: 'withOptions',
	        value: function withOptions(options) {
	            _Object$assign(this.defaultOptions, options || {});
	            return this;
	        }
	
	        /**
	         * Call with the originalEvent
	         * @param {Event} e
	         * @returns {EventHandler}
	         */
	    }, {
	        key: 'withOriginal',
	        value: function withOriginal(e) {
	            return this.withDetail({
	                originalEvent: e
	            });
	        }
	
	        /**
	         * Extends the detail part of the event
	         * @param {Object} o
	         * @returns {EventHandler}
	         */
	    }, {
	        key: 'withDetail',
	        value: function withDetail(o) {
	            if (!this.defaultOptions.detail) {
	                this.defaultOptions.detail = {};
	            }
	            _Object$assign(this.defaultOptions.detail, o);
	            return this;
	        }
	
	        /**
	         * @returns {Window.CustomEvent}
	         */
	    }, {
	        key: 'fire',
	        value: function fire() {
	            var e = new CustomEvent(this.name, this.defaultOptions);
	            if (this.target) {
	                this.target.dispatchEvent(e);
	            }
	            return e;
	        }
	    }]);
	
	    return EventHandler;
	})();
	
	var Event = (function () {
	    function Event() {
	        _classCallCheck(this, Event);
	    }
	
	    _createClass(Event, null, [{
	        key: 'dispatch',
	
	        /**
	         * Prepares to dispatch a custom event (without firing)
	         * @param {HTMLElement} target
	         * @param {String} name
	         * @returns {EventHandler}
	         */
	        value: function dispatch(target, name) {
	            return new EventHandler(target, name);
	        }
	
	        /**
	         * Dispatches a custom event and fires it directly
	         * @param {HTMLElement} target
	         * @param {String} name
	         * @param {Object} [options]
	         * @returns {Window.CustomEvent}
	         */
	    }, {
	        key: 'dispatchAndFire',
	        value: function dispatchAndFire(target, name, options) {
	            return new EventHandler(target, name).withOptions(options).fire();
	        }
	    }]);
	
	    return Event;
	})();
	
	exports['default'] = Event;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvRXZlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBSWIsS0FBSyxDQUFBLFlBQVk7QUFDYixRQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO0FBQ2pFLFlBQUksV0FBVyxDQUFDO0FBQ2hCLG1CQUFXLEdBQUcsVUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ25DLGdCQUFJLEdBQUcsQ0FBQztBQUNSLGtCQUFNLEdBQUcsTUFBTSxJQUFJO0FBQ1gsdUJBQU8sRUFBRSxLQUFLO0FBQ2QsMEJBQVUsRUFBRSxLQUFLO0FBQ2pCLHNCQUFNLEVBQUUsU0FBUzthQUNwQixDQUFDO0FBQ04sZUFBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsZUFBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3RSxtQkFBTyxHQUFHLENBQUM7U0FDZCxDQUFDO0FBQ0YsbUJBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDL0MsY0FBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FDcEM7Q0FDSixDQUFBLEVBQUUsQ0FBQzs7Ozs7SUFJRSxZQUFZOzs7Ozs7O0FBTUgsYUFOVCxZQUFZLENBTUYsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFOeEIsWUFBWTs7QUFRVixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsY0FBYyxHQUFHO0FBQ2xCLG1CQUFPLEVBQUUsSUFBSTtBQUNiLHNCQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDOztBQUVGLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOzs7Ozs7OztpQkFmQyxZQUFZOztlQXNCSCxxQkFBQyxPQUFPLEVBQUU7QUFDakIsMkJBQWMsSUFBSSxDQUFDLGNBQWMsRUFBRyxPQUFPLElBQUksRUFBRSxDQUFFLENBQUM7QUFDcEQsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7Ozs7Ozs7OztlQU9XLHNCQUFDLENBQUMsRUFBRTtBQUNaLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDbkIsNkJBQWEsRUFBRSxDQUFDO2FBQ25CLENBQUMsQ0FBQztTQUNOOzs7Ozs7Ozs7ZUFPUyxvQkFBQyxDQUFDLEVBQUU7QUFDVixnQkFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO0FBQzdCLG9CQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7YUFDbkM7QUFDRCwyQkFBYyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxtQkFBTyxJQUFJLENBQUM7U0FDZjs7Ozs7OztlQUtHLGdCQUFHO0FBQ0gsZ0JBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hELGdCQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDYixvQkFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxtQkFBTyxDQUFDLENBQUM7U0FDWjs7O1dBNURDLFlBQVk7OztJQWdFWixLQUFLO2FBQUwsS0FBSzs4QkFBTCxLQUFLOzs7aUJBQUwsS0FBSzs7Ozs7Ozs7O2VBT1Esa0JBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtBQUMxQixtQkFBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekM7Ozs7Ozs7Ozs7O2VBU3FCLHlCQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQzFDLG1CQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckU7OztXQXBCQyxLQUFLOzs7cUJBQUwsS0FBSyIsImZpbGUiOiIvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9ub2RlX21vZHVsZXMvZXNsaW50LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9zcmMvbWFpbi91dGlsL0V2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKmdsb2JhbCBDdXN0b21FdmVudCovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gcG9seWZpbGwgZm9yIGN1c3RvbSBldmVudHMgdG8gbWFrZSB0aGlua3Mgd29yayBpbiBJRVxuLy8gVGhlIG5lZWRlZCBwb2x5ZmlsbCBpcyBzbyBzbWFsbCB0aGF0IEkgZW1iZWRkZWQgaXQgaGVyZVxudm9pZCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFnbG9iYWwuQ3VzdG9tRXZlbnQgfHwgdHlwZW9mIGdsb2JhbC5DdXN0b21FdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgQ3VzdG9tRXZlbnQ7XG4gICAgICAgIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBldnQ7XG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgICAgICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dDtcbiAgICAgICAgfTtcbiAgICAgICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gZ2xvYmFsLkV2ZW50LnByb3RvdHlwZTtcbiAgICAgICAgZ2xvYmFsLkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG4gICAgfVxufSgpO1xuLyoqXG4gKiBTaW1wbGVyIEV2ZW50IGRpc3BhdGNoaW5nXG4gKi9cbmNsYXNzIEV2ZW50SGFuZGxlciB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgbmFtZSkge1xuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBtb3JlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtFdmVudEhhbmRsZXJ9XG4gICAgICovXG4gICAgd2l0aE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdE9wdGlvbnMsIChvcHRpb25zIHx8IHt9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgd2l0aCB0aGUgb3JpZ2luYWxFdmVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRIYW5kbGVyfVxuICAgICAqL1xuICAgIHdpdGhPcmlnaW5hbChlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpdGhEZXRhaWwoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRlbmRzIHRoZSBkZXRhaWwgcGFydCBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb1xuICAgICAqIEByZXR1cm5zIHtFdmVudEhhbmRsZXJ9XG4gICAgICovXG4gICAgd2l0aERldGFpbChvKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWZhdWx0T3B0aW9ucy5kZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMuZGV0YWlsID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRPcHRpb25zLmRldGFpbCwgbyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtXaW5kb3cuQ3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgZmlyZSgpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLmRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIEV2ZW50IHtcbiAgICAvKipcbiAgICAgKiBQcmVwYXJlcyB0byBkaXNwYXRjaCBhIGN1c3RvbSBldmVudCAod2l0aG91dCBmaXJpbmcpXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRIYW5kbGVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBkaXNwYXRjaCh0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEhhbmRsZXIodGFyZ2V0LCBuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IGFuZCBmaXJlcyBpdCBkaXJlY3RseVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm5zIHtXaW5kb3cuQ3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgc3RhdGljIGRpc3BhdGNoQW5kRmlyZSh0YXJnZXQsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEhhbmRsZXIodGFyZ2V0LCBuYW1lKS53aXRoT3B0aW9ucyhvcHRpb25zKS5maXJlKCk7XG4gICAgfVxufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	'use strict';
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var DOM_COMPLETE = 'complete';
	
	// we attach global settings to global once because settings might be shared a lot of times trough the application
	// Maybe find a better way to handle that scenario
	if (!global.FLEXCSS_GLOBAL_SETTINGS) {
	    (function () {
	
	        global.FLEXCSS_GLOBAL_SETTINGS = {
	            // defined breakpoint for small devices < n
	            smallBreakpoint: 768,
	            // nodes that should be updated when no scrollbar is expected
	            scrollbarUpdateNodes: global.document.body !== null ? [global.document.body] : [],
	            // additional Delay until darkener is fully hidden
	            darkenerFadeDelay: 100,
	            // class that is added if canvas has been toggled
	            canvasToggledClass: 'toggled-canvas'
	        };
	
	        global.FLEXCSS_CONST_IS_IOS = null;
	
	        global.FLEXCSS_CONST_IS_TOUCH = null;
	
	        global.FLEXCSS_CONST_IS_IE = null;
	
	        global.FLEXCSS_CONST_TAB_EVENT = 'click';
	
	        var init = function init() {
	            // Measure scrollbar width
	            global.FLEXCSS_CONST_SCROLLBAR_WIDTH = _utilUtil2['default'].getScrollBarWidth();
	            // detect right transition end event
	            global.FLEXCSS_CONST_TRANSITION_EVENT = _utilUtil2['default'].whichTransitionEndEvent();
	        };
	
	        if (global.document.readyState === DOM_COMPLETE) {
	            init();
	        } else {
	            // it's possible that global.document.body is not available if the document is not
	            // loaded completely
	            document.addEventListener('DOMContentLoaded', function () {
	                init();
	            });
	        }
	    })();
	}
	
	/**
	 * Utility class that setups global settings
	 */
	
	var Settings = (function () {
	    function Settings() {
	        _classCallCheck(this, Settings);
	    }
	
	    _createClass(Settings, null, [{
	        key: 'setup',
	
	        /**
	         * Setup global settings, overwrite default values
	         * @param {Object} settings
	         */
	        value: function setup(settings) {
	            _Object$assign(global.FLEXCSS_GLOBAL_SETTINGS, settings);
	        }
	
	        /**
	         * Access to global settings
	         * @returns {Object}
	         */
	    }, {
	        key: 'get',
	        value: function get() {
	            return global.FLEXCSS_GLOBAL_SETTINGS;
	        }
	
	        /**
	         * Detects a IOS Device, caches subsequent calls
	         * @returns {boolean}
	         */
	    }, {
	        key: 'isIosDevice',
	        value: function isIosDevice() {
	            if (!global.FLEXCSS_CONST_IS_IOS) {
	                global.FLEXCSS_CONST_IS_IOS = global.navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
	            }
	
	            return global.FLEXCSS_CONST_IS_IOS;
	        }
	
	        /**
	         * Detects a touch device, caches subsequent calls
	         * @returns {boolean}
	         */
	    }, {
	        key: 'isTouchDevice',
	        value: function isTouchDevice() {
	            if (!global.FLEXCSS_CONST_IS_TOUCH) {
	                global.FLEXCSS_CONST_IS_TOUCH = 'ontouchstart' in window || !!global.navigator.msMaxTouchPoints;
	            }
	            return global.FLEXCSS_CONST_IS_TOUCH;
	        }
	
	        /**
	         * Checks if current browser is Internet Explorer
	         * @returns {boolean|*}
	         */
	    }, {
	        key: 'isIE',
	        value: function isIE() {
	            if (!global.FLEXCSS_CONST_IS_IE) {
	                global.FLEXCSS_CONST_IS_IE = "ActiveXObject" in window;
	            }
	            return global.FLEXCSS_CONST_IS_IE;
	        }
	
	        /**
	         * @returns {String}
	         */
	    }, {
	        key: 'getTransitionEvent',
	        value: function getTransitionEvent() {
	            return global.FLEXCSS_CONST_TRANSITION_EVENT;
	        }
	
	        /**
	         * @returns {int}
	         */
	    }, {
	        key: 'getScrollbarWidth',
	        value: function getScrollbarWidth() {
	            return global.FLEXCSS_CONST_SCROLLBAR_WIDTH;
	        }
	
	        /**
	         * @returns {String}
	         */
	    }, {
	        key: 'getTabEvent',
	        value: function getTabEvent() {
	            return global.FLEXCSS_CONST_TAB_EVENT;
	        }
	    }]);
	
	    return Settings;
	})();
	
	exports['default'] = Settings;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvU2V0dGluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozt3QkFFSSxXQUFXOzs7O0FBRTVCLElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQzs7OztBQUloQyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFOzs7QUFFakMsY0FBTSxDQUFDLHVCQUF1QixHQUFHOztBQUU3QiwyQkFBZSxFQUFFLEdBQUc7O0FBRXBCLGdDQUFvQixFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs7QUFFakYsNkJBQWlCLEVBQUUsR0FBRzs7QUFFdEIsOEJBQWtCLEVBQUUsZ0JBQWdCO1NBQ3ZDLENBQUM7O0FBRUYsY0FBTSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQzs7QUFFbkMsY0FBTSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQzs7QUFFckMsY0FBTSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzs7QUFFbEMsY0FBTSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQzs7QUFFekMsWUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLEdBQVM7O0FBRWYsa0JBQU0sQ0FBQyw2QkFBNkIsR0FBRyxzQkFBSyxpQkFBaUIsRUFBRSxDQUFDOztBQUVoRSxrQkFBTSxDQUFDLDhCQUE4QixHQUFHLHNCQUFLLHVCQUF1QixFQUFFLENBQUM7U0FDMUUsQ0FBQzs7QUFFRixZQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFlBQVksRUFBRTtBQUM3QyxnQkFBSSxFQUFFLENBQUM7U0FDVixNQUFNOzs7QUFHSCxvQkFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07QUFDaEQsb0JBQUksRUFBRSxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1NBQ047O0NBQ0o7Ozs7OztJQU1LLFFBQVE7YUFBUixRQUFROzhCQUFSLFFBQVE7OztpQkFBUixRQUFROzs7Ozs7O2VBTUUsZUFBQyxRQUFRLEVBQUU7QUFDbkIsMkJBQWMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNEOzs7Ozs7OztlQU1TLGVBQUc7QUFDVCxtQkFBTyxNQUFNLENBQUMsdUJBQXVCLENBQUM7U0FDekM7Ozs7Ozs7O2VBTWlCLHVCQUFHO0FBQ2pCLGdCQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFO0FBQzlCLHNCQUFNLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDekY7O0FBRUQsbUJBQU8sTUFBTSxDQUFDLG9CQUFvQixDQUFDO1NBQ3RDOzs7Ozs7OztlQU1tQix5QkFBRztBQUNuQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRTtBQUNoQyxzQkFBTSxDQUFDLHNCQUFzQixHQUFHLGNBQWMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEFBQUMsQ0FBQzthQUNyRztBQUNELG1CQUFPLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztTQUN4Qzs7Ozs7Ozs7ZUFNVSxnQkFBRztBQUNWLGdCQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFO0FBQzdCLHNCQUFNLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxJQUFJLE1BQU0sQ0FBQzthQUMxRDtBQUNELG1CQUFPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUNyQzs7Ozs7OztlQUt3Qiw4QkFBRztBQUN4QixtQkFBTyxNQUFNLENBQUMsOEJBQThCLENBQUM7U0FDaEQ7Ozs7Ozs7ZUFLdUIsNkJBQUc7QUFDdkIsbUJBQU8sTUFBTSxDQUFDLDZCQUE2QixDQUFDO1NBQy9DOzs7Ozs7O2VBS2lCLHVCQUFHO0FBQ2pCLG1CQUFPLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztTQUN6Qzs7O1dBdkVDLFFBQVE7OztxQkFBUixRQUFRIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvU2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFV0aWwgZnJvbSAndXRpbC9VdGlsJztcblxuY29uc3QgRE9NX0NPTVBMRVRFID0gJ2NvbXBsZXRlJztcblxuLy8gd2UgYXR0YWNoIGdsb2JhbCBzZXR0aW5ncyB0byBnbG9iYWwgb25jZSBiZWNhdXNlIHNldHRpbmdzIG1pZ2h0IGJlIHNoYXJlZCBhIGxvdCBvZiB0aW1lcyB0cm91Z2ggdGhlIGFwcGxpY2F0aW9uXG4vLyBNYXliZSBmaW5kIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhhdCBzY2VuYXJpb1xuaWYgKCFnbG9iYWwuRkxFWENTU19HTE9CQUxfU0VUVElOR1MpIHtcblxuICAgIGdsb2JhbC5GTEVYQ1NTX0dMT0JBTF9TRVRUSU5HUyA9IHtcbiAgICAgICAgLy8gZGVmaW5lZCBicmVha3BvaW50IGZvciBzbWFsbCBkZXZpY2VzIDwgblxuICAgICAgICBzbWFsbEJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgLy8gbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCB3aGVuIG5vIHNjcm9sbGJhciBpcyBleHBlY3RlZFxuICAgICAgICBzY3JvbGxiYXJVcGRhdGVOb2RlczogZ2xvYmFsLmRvY3VtZW50LmJvZHkgIT09IG51bGwgPyBbZ2xvYmFsLmRvY3VtZW50LmJvZHldIDogW10sXG4gICAgICAgIC8vIGFkZGl0aW9uYWwgRGVsYXkgdW50aWwgZGFya2VuZXIgaXMgZnVsbHkgaGlkZGVuXG4gICAgICAgIGRhcmtlbmVyRmFkZURlbGF5OiAxMDAsXG4gICAgICAgIC8vIGNsYXNzIHRoYXQgaXMgYWRkZWQgaWYgY2FudmFzIGhhcyBiZWVuIHRvZ2dsZWRcbiAgICAgICAgY2FudmFzVG9nZ2xlZENsYXNzOiAndG9nZ2xlZC1jYW52YXMnXG4gICAgfTtcblxuICAgIGdsb2JhbC5GTEVYQ1NTX0NPTlNUX0lTX0lPUyA9IG51bGw7XG5cbiAgICBnbG9iYWwuRkxFWENTU19DT05TVF9JU19UT1VDSCA9IG51bGw7XG5cbiAgICBnbG9iYWwuRkxFWENTU19DT05TVF9JU19JRSA9IG51bGw7XG5cbiAgICBnbG9iYWwuRkxFWENTU19DT05TVF9UQUJfRVZFTlQgPSAnY2xpY2snO1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGhcbiAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfU0NST0xMQkFSX1dJRFRIID0gVXRpbC5nZXRTY3JvbGxCYXJXaWR0aCgpO1xuICAgICAgICAvLyBkZXRlY3QgcmlnaHQgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfVFJBTlNJVElPTl9FVkVOVCA9IFV0aWwud2hpY2hUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbC5kb2N1bWVudC5yZWFkeVN0YXRlID09PSBET01fQ09NUExFVEUpIHtcbiAgICAgICAgaW5pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBnbG9iYWwuZG9jdW1lbnQuYm9keSBpcyBub3QgYXZhaWxhYmxlIGlmIHRoZSBkb2N1bWVudCBpcyBub3RcbiAgICAgICAgLy8gbG9hZGVkIGNvbXBsZXRlbHlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGluaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgdGhhdCBzZXR1cHMgZ2xvYmFsIHNldHRpbmdzXG4gKi9cbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBTZXR0aW5ncyB7XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBnbG9iYWwgc2V0dGluZ3MsIG92ZXJ3cml0ZSBkZWZhdWx0IHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5nc1xuICAgICAqL1xuICAgIHN0YXRpYyBzZXR1cChzZXR0aW5ncykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGdsb2JhbC5GTEVYQ1NTX0dMT0JBTF9TRVRUSU5HUywgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyB0byBnbG9iYWwgc2V0dGluZ3NcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19HTE9CQUxfU0VUVElOR1M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBhIElPUyBEZXZpY2UsIGNhY2hlcyBzdWJzZXF1ZW50IGNhbGxzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzSW9zRGV2aWNlKCkge1xuICAgICAgICBpZiAoIWdsb2JhbC5GTEVYQ1NTX0NPTlNUX0lTX0lPUykge1xuICAgICAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfSU9TID0gZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS9pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19DT05TVF9JU19JT1M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBhIHRvdWNoIGRldmljZSwgY2FjaGVzIHN1YnNlcXVlbnQgY2FsbHNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNUb3VjaERldmljZSgpIHtcbiAgICAgICAgaWYgKCFnbG9iYWwuRkxFWENTU19DT05TVF9JU19UT1VDSCkge1xuICAgICAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfVE9VQ0ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgISEoZ2xvYmFsLm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfVE9VQ0g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGN1cnJlbnQgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufCp9XG4gICAgICovXG4gICAgc3RhdGljIGlzSUUoKSB7XG4gICAgICAgIGlmICghZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfSUUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5GTEVYQ1NTX0NPTlNUX0lTX0lFID0gXCJBY3RpdmVYT2JqZWN0XCIgaW4gd2luZG93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19DT05TVF9JU19JRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRUcmFuc2l0aW9uRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19DT05TVF9UUkFOU0lUSU9OX0VWRU5UO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtpbnR9XG4gICAgICovXG4gICAgc3RhdGljIGdldFNjcm9sbGJhcldpZHRoKCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsLkZMRVhDU1NfQ09OU1RfU0NST0xMQkFSX1dJRFRIO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGdldFRhYkV2ZW50KCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsLkZMRVhDU1NfQ09OU1RfVEFCX0VWRU5UO1xuICAgIH1cbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 102 */,
/* 103 */,
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.Modal
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	/*global KeyboardEvent*/
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _Promise = __webpack_require__(38)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _utilEvent = __webpack_require__(100);
	
	var _utilEvent2 = _interopRequireDefault(_utilEvent);
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var _Widget = __webpack_require__(105);
	
	var _Widget2 = _interopRequireDefault(_Widget);
	
	var HTML_ELEMENT = global.document.documentElement;
	var KEY_ESC = 27;
	/* Attribute Names */
	var ATTR_CREATE_NEW = 'data-new-instance';
	var ATTR_CLOSE = 'data-close-modal';
	var ATTR_NAME = 'data-modal';
	
	/* Class names */
	var CLS_CONTAINER_CURRENT = 'front';
	var CLS_OPEN = 'open';
	var CLS_CURRENT = 'current';
	var CLS_PART_OF_STACK = 'part-of-stack';
	var CLS_MODAL_OPEN = 'modal-open';
	var CLS_MODAL_CONTAINER = 'modal-container';
	var CLS_ANIM_END = 'modal-anim-end';
	var CLS_LOADER_CONTAINER = 'loader-container';
	var CLS_LOADER = 'loader';
	
	/* Events */
	
	/**
	 * Event triggered when modal is closed
	 * @type {string}
	 */
	var EVENT_MODAL_CLOSED = 'flexcss.modal.closed';
	exports.EVENT_MODAL_CLOSED = EVENT_MODAL_CLOSED;
	/**
	 * Event triggered before a modal is closed, cancelable
	 * @type {string}
	 */
	var EVENT_MODAL_BEFORE_CLOSED = 'flexcss.modal.beforeClose';
	exports.EVENT_MODAL_BEFORE_CLOSED = EVENT_MODAL_BEFORE_CLOSED;
	/**
	 * Event triggered when a modal is opened
	 * @type {string}
	 */
	var EVENT_MODAL_OPENED = 'flexcss.modal.opened';
	
	exports.EVENT_MODAL_OPENED = EVENT_MODAL_OPENED;
	/**
	 * Event triggered when modal is initilized, called on target
	 * @type {string}
	 */
	var EVENT_MODAL_INIT = 'flexcss.modal.init';
	
	exports.EVENT_MODAL_INIT = EVENT_MODAL_INIT;
	/**
	 * Triggered when the content of an async modal on a target is loaded, called on target
	 * @type {string}
	 */
	var EVENT_MODAL_ASYNC_TARGET_LOADED = 'flexcss.modal.asyncTargetLoaded';
	
	exports.EVENT_MODAL_ASYNC_TARGET_LOADED = EVENT_MODAL_ASYNC_TARGET_LOADED;
	/**
	 * A Modal Implementation
	 */
	
	var Modal = (function () {
	    function Modal(DelegateContainer, options) {
	        _classCallCheck(this, Modal);
	
	        var doc = global.document,
	            container = DelegateContainer instanceof HTMLElement ? DelegateContainer : doc.getElementById(DelegateContainer);
	
	        // Instance vars:
	        if (!container) {
	            throw 'Could not found container element by given ID/Element: ' + DelegateContainer;
	        }
	
	        this.currentOpen = null;
	
	        this.loading = false;
	
	        this.container = container;
	
	        /**
	         * Default Options
	         */
	        this.options = {
	            classNames: 'modal',
	            closeOnEscape: true,
	            closeOnBackgroundClick: true,
	            destroyOnFinish: false,
	            fixedContainer: true,
	            containerClassNames: ''
	        };
	
	        _Object$assign(this.options, options);
	
	        // Container where events are delegated
	        this.eventContainer = null;
	        this.eventFunction = null;
	
	        this.dataMainPageContainer = global.document.body;
	
	        this.currentScrollTop = 0;
	
	        this.modalContainer = null;
	
	        // Destroy full modal instance when no dialogs are bind to?
	        // Otherwise container is recycled
	        this.destroyOnFinish = this.options.destroyOnFinish;
	    }
	
	    // Static variable that keeps track of all open modals
	
	    /**
	     * Removes this modal from global stack
	     * Will handle fixing main html element too
	     * @private
	     * @param n
	     */
	
	    _createClass(Modal, [{
	        key: '_removeModalFromStack',
	        value: function _removeModalFromStack(n) {
	            var t = Modal._modalInstances.indexOf(n),
	                self = this;
	            if (t > -1) {
	                Modal._modalInstances.splice(t, 1);
	                if (Modal._modalInstances.length === 0) {
	                    // restore scrollPosition:
	                    if (self.dataMainPageContainer) {
	                        setTimeout(function () {
	                            if (self.options.fixedContainer) {
	                                self.dataMainPageContainer.style.position = "static";
	                                self.dataMainPageContainer.style.top = "0px";
	                                // reset scrollTop
	                                document.documentElement.scrollTop = self.currentScrollTop;
	                                document.body.scrollTop = self.currentScrollTop;
	                            }
	                            _utilSettings2['default'].get().scrollbarUpdateNodes.forEach(function (node) {
	                                node.style.paddingRight = '';
	                            });
	                            HTML_ELEMENT.classList.remove(CLS_MODAL_OPEN);
	                        }, 0);
	                    }
	                }
	            }
	        }
	
	        /**
	         * Modal container that contains all `stacked` modals for this instance
	         * @returns {HTMLElement}
	         */
	    }, {
	        key: 'getModalContainer',
	        value: function getModalContainer() {
	            return this.modalContainer;
	        }
	
	        /**
	         * Closes the current open modal of this stack
	         * @params [e], optional event
	         * @returns {*}
	         */
	    }, {
	        key: 'close',
	        value: function close(e) {
	            var self = this;
	
	            var options = self.currentOpen ? _utilUtil2['default'].applyOptionsFromElement(self.currentOpen, _utilUtil2['default'].copy(self.options)) : self.options;
	
	            // close only on keyboard if instance should
	            if (!options.closeOnEscape && e instanceof KeyboardEvent) {
	                return false;
	            }
	
	            // close only on background if instance should
	            if (!options.closeOnBackgroundClick && e && e.type === _utilSettings2['default'].getTabEvent() && !e.target.hasAttribute(ATTR_CLOSE)) {
	                return false;
	            }
	
	            // if an instance is currently loading, prevent from closing
	            if (self.loading) {
	                return false;
	            }
	
	            if (e) {
	                e.preventDefault();
	            }
	
	            if (self.currentOpen) {
	                // dispatch beforeClose event, if prevented prevent modal from closing
	                var ev = _utilEvent2['default'].dispatchAndFire(self.currentOpen, EVENT_MODAL_BEFORE_CLOSED);
	                if (ev.defaultPrevented) {
	                    return false;
	                }
	
	                this._finishState(self.currentOpen);
	                // if there is an previous modal
	                if (self.currentOpen.prevModal) {
	                    // switch to the next modal
	                    return self.switchModals(self.currentOpen.prevModal, self.currentOpen.prevModal.prevModal || null);
	                }
	
	                // finally trigger closed event
	                _utilEvent2['default'].dispatch(self.currentOpen, EVENT_MODAL_CLOSED).withOriginal(e).fire();
	            }
	            self._removeModalFromStack(self.currentOpen);
	
	            // Full stack closed:
	            self.currentOpen = null;
	            if (self.modalContainer) {
	                // setup next open
	                var lastContainer = Modal._modalInstances[Modal._modalInstances.length - 1],
	                    classList = self.modalContainer.classList;
	                classList.remove(CLS_CONTAINER_CURRENT);
	                classList.remove(CLS_OPEN);
	                // Remove all current classes from child-nodes
	                for (var i = 0; i < self.modalContainer.childNodes.length; i++) {
	                    var node = self.modalContainer.childNodes[i],
	                        cl = node.classList;
	                    // remove applied styles
	                    self._finishState(node);
	                    cl.remove(CLS_CURRENT);
	                    cl.remove(CLS_PART_OF_STACK);
	                }
	                if (lastContainer) {
	                    lastContainer.parentNode.classList.add(CLS_CONTAINER_CURRENT);
	                }
	            }
	
	            if (self.destroyOnFinish) {
	                self.destroy();
	            }
	            return self;
	        }
	
	        /**
	         * Resets a target when newly initilizes
	         * @param target
	         * @private
	         */
	    }, {
	        key: '_finishState',
	        value: function _finishState(target) {
	            target.classList.remove(CLS_ANIM_END);
	        }
	
	        /**
	         * Handler called when a Modal has finished an animation
	         * @param e
	         * @param self
	         * @private
	         */
	    }, {
	        key: '_finishAnim',
	        value: function _finishAnim(e, self) {
	            e.target.classList.add(CLS_ANIM_END);
	            e.target.removeEventListener(e.type, self, true);
	        }
	
	        /**
	         * Brings the given modal to front
	         * @param co
	         * @param last
	         */
	    }, {
	        key: 'switchModals',
	        value: function switchModals(co, last) {
	            co.prevModal = last;
	            Modal._modalInstances.push(co);
	
	            if (last) {
	                this._finishState(last);
	                _utilUtil2['default'].prefixedAnimateEvent(last, 'AnimationEnd', this._finishAnim);
	                last.classList.add(CLS_PART_OF_STACK);
	            }
	            // set new currentOpen
	            this.currentOpen = co;
	
	            // bring current container to the front
	            var instances = Modal._modalInstances;
	
	            for (var m = 0; m < instances.length; m++) {
	                instances[m].parentNode.classList.remove(CLS_CONTAINER_CURRENT);
	            }
	            this.modalContainer.classList.add(CLS_CONTAINER_CURRENT);
	            // remove animations if animations has been completed, fixes various bugs:
	            // - fixes nested scrolling element issue in iOS Browsers / Mobile-Safari
	            _utilUtil2['default'].prefixedAnimateEvent(co, 'AnimationEnd', this._finishAnim);
	
	            for (var i = 0; i < this.modalContainer.childNodes.length; i++) {
	                var n = this.modalContainer.childNodes[i],
	                    isCurrent = n.classList.contains(CLS_CURRENT);
	                if (n === co) {
	                    co.classList.add(CLS_CURRENT);
	                    co.classList.remove(CLS_PART_OF_STACK);
	                    this._finishState(co);
	                } else {
	                    n.classList.remove(CLS_CURRENT);
	                    if (isCurrent) {
	                        this._removeModalFromStack(n);
	                        _utilEvent2['default'].dispatchAndFire(n, EVENT_MODAL_CLOSED);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'handleScrollbar',
	        value: function handleScrollbar() {
	            var self = this;
	            if (Modal._modalInstances.length === 0) {
	                // save current scrollTop:
	                var scrollTop = undefined,
	                    c = undefined;
	                if (self.options.fixedContainer) {
	                    scrollTop = global.pageYOffset;
	                    c = self.dataMainPageContainer;
	                    self.currentScrollTop = scrollTop;
	                }
	                // this causes reflow/paint and should be optimized
	                // At lest we write in a batch later
	                _utilSettings2['default'].get().scrollbarUpdateNodes.map(function (n) {
	                    return {
	                        n: n, padding: parseInt(global.getComputedStyle(n).paddingRight) + _utilSettings2['default'].getScrollbarWidth() + 'px'
	                    };
	                }).forEach(function (d) {
	                    d.n.style.paddingRight = d.padding;
	                });
	                if (self.options.fixedContainer) {
	                    if (c) {
	                        c.style.cssText += 'top:' + (scrollTop * -1 + 'px') + ';position:fixed';
	                    }
	                }
	                HTML_ELEMENT.classList.add(CLS_MODAL_OPEN);
	            }
	        }
	
	        /**
	         * Creates a Modal and opens it (later)
	         * @param e
	         * @returns {Promise|boolean}
	         */
	    }, {
	        key: 'createWidget',
	        value: function createWidget(e) {
	            var self = this;
	            if (this.loading) {
	                return false;
	            }
	
	            // check if another modal has registered events on this dom path:
	            if (e && e.target) {
	                var foundInstance = _utilUtil2['default'].parentsUntil(e.target, function (node) {
	                    return node && node.flexModalInstance;
	                });
	
	                // if another instance has been found, abort
	                if (foundInstance !== this.container) {
	                    return false;
	                }
	            }
	            var targetContent,
	                future,
	                widget,
	                target,
	                hasTarget = true,
	                isHtmlElement = e instanceof HTMLElement,
	                isWidget = _Widget2['default'].isWidget(e);
	            if (isHtmlElement || isWidget) {
	                if (isHtmlElement) {
	                    targetContent = e;
	                } else {
	                    widget = e;
	                    targetContent = widget.element;
	                }
	            } else {
	                target = e.target;
	                if (!target) {
	                    throw 'Could not find target, did you pass an event, a HTMLElement or an Widget?';
	                }
	                hasTarget = target.hasAttribute(ATTR_NAME);
	                targetContent = target.getAttribute(ATTR_NAME);
	                widget = _Widget2['default'].findWidget(target);
	                if (target.hasAttribute(ATTR_CREATE_NEW) && !e.newInstance) {
	                    var newInstance = new Modal(this.container).setDestroyOnFinish(true);
	                    e.newInstance = true;
	                    newInstance.fromEvent(e).then(function () {
	                        newInstance.registerEvents(newInstance.getModalContainer());
	                    });
	                    return false;
	                }
	                if (hasTarget) {
	                    e.stopImmediatePropagation();
	                    e.preventDefault();
	                }
	            }
	
	            if (!hasTarget) {
	                return false;
	            }
	
	            var modalContainerClasses = this.modalContainer ? this.modalContainer.classList : [];
	
	            // lazy create modal container
	            if (!this.modalContainer) {
	                this.modalContainer = global.document.createElement('div');
	                this.modalContainer.className = CLS_MODAL_CONTAINER + ' ' + this.options.containerClassNames + ' ' + CLS_OPEN;
	                var closeModalFunction = function closeModalFunction(ce) {
	                    if (self.loading) {
	                        return false;
	                    }
	                    if (_utilUtil2['default'].isPartOfNode(ce.target, self.currentOpen)) {
	                        if (!ce.target.hasAttribute(ATTR_CLOSE)) {
	                            return false;
	                        }
	                    }
	                    self.close(ce);
	                };
	
	                this.modalContainer.addEventListener(_utilSettings2['default'].getTabEvent(), closeModalFunction, false);
	
	                modalContainerClasses = this.modalContainer.classList;
	                this.container.appendChild(this.modalContainer);
	            } else {
	                modalContainerClasses.add(CLS_OPEN);
	            }
	
	            var loader = undefined,
	                doc = global.document,
	                toggleLoader = function toggleLoader(show) {
	                if (show) {
	                    loader = doc.createElement('div');
	                    loader.className = CLS_LOADER_CONTAINER;
	                    var loaderLoader = doc.createElement('div');
	                    loaderLoader.className = CLS_LOADER;
	                    loader.appendChild(loaderLoader);
	                    self.modalContainer.appendChild(loader);
	                } else {
	                    loader.parentNode.removeChild(loader);
	                }
	            };
	
	            this.handleScrollbar();
	
	            modalContainerClasses.add(CLS_CONTAINER_CURRENT);
	            modalContainerClasses.add('loading');
	            this.loading = true;
	            toggleLoader(true);
	            var async = widget ? widget.getAsync() : null;
	            if (_Widget2['default'].isWidget(widget) && async) {
	                future = async.then(function (r) {
	                    var result;
	                    if (r instanceof HTMLElement || r instanceof DocumentFragment) {
	                        result = r;
	                    } else {
	                        // Create container Element:
	                        var element = doc.createElement('div');
	                        element.className = self.options.classNames;
	                        element.innerHTML = r;
	                        element.id = _utilUtil2['default'].guid();
	                        result = element;
	                    }
	                    widget.finalContent = result;
	                    _utilEvent2['default'].dispatchAndFire(target, EVENT_MODAL_ASYNC_TARGET_LOADED);
	                    return result;
	                });
	            } else {
	                var el = targetContent instanceof HTMLElement || targetContent instanceof DocumentFragment ? targetContent : doc.getElementById(targetContent);
	                if (el) {
	                    future = new _Promise(function (resolve) {
	                        resolve(el);
	                    });
	                } else {
	                    throw 'Could not found given modal element (content) with ID: ' + targetContent;
	                }
	            }
	
	            _utilEvent2['default'].dispatchAndFire(target, EVENT_MODAL_INIT);
	
	            return future.then(function (thisEl) {
	                thisEl.hfWidgetInstance = self;
	                self.modalContainer.appendChild(thisEl);
	                modalContainerClasses.remove('loading');
	                self.loading = false;
	                toggleLoader(false);
	
	                self.open(thisEl, true, e);
	
	                return thisEl;
	            });
	        }
	
	        /**
	         * Open's an already rendered modal
	         * @param {HTMLElement} modal
	         * @param {Boolean} [internal], set to true to prevent container management
	         * @param {Boolean} [maybeEvent], optional event-object that triggered open
	         */
	    }, {
	        key: 'open',
	        value: function open(modal, internal, maybeEvent) {
	
	            if (!internal) {
	                this.modalContainer.classList.add('open');
	                this.handleScrollbar();
	            }
	            this.switchModals(modal, this.currentOpen);
	
	            _utilEvent2['default'].dispatch(modal, EVENT_MODAL_OPENED).withOriginal(maybeEvent).fire();
	        }
	    }, {
	        key: 'registerEvents',
	        value: function registerEvents(delegate) {
	            var delegateContainer = delegate || this.container,
	                self = this;
	
	            // register modal instance so we can detect multiple registrars
	            delegateContainer.flexModalInstance = self;
	            self.eventFunction = function () {
	                self.createWidget.apply(self, arguments);
	            };
	            delegateContainer.addEventListener(_utilSettings2['default'].getTabEvent(), self.eventFunction, false);
	
	            self.eventContainer = delegateContainer;
	            return self;
	        }
	
	        /**
	         * Creates a new Dialog Instance either directly from HTML Element or a Widget instance
	         * @param {HTMLElement|Widget} widget instance or html element
	         * @returns {Promise}
	         */
	    }, {
	        key: 'fromWidget',
	        value: function fromWidget(widget) {
	            return this.createWidget(widget);
	        }
	
	        /**
	         * Creates a Widget from event
	         * @param e
	         * @returns {Promise}
	         */
	    }, {
	        key: 'fromEvent',
	        value: function fromEvent(e) {
	            return this.createWidget(e);
	        }
	    }, {
	        key: 'setDestroyOnFinish',
	        value: function setDestroyOnFinish(v) {
	            this.destroyOnFinish = v;
	            return this;
	        }
	
	        /**
	         * Destroy this widget instance, cleans empty DOM nodes
	         * Will use fast MutationObserver if available, otherwise falls back to DOMNodeRemoved event
	         */
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var self = this,
	                modalContainer = this.modalContainer;
	            var isEmptyContainer = modalContainer.childNodes.length === 0;
	            // Remove event listener on destroy, do not remove DOM node
	            if (self.eventContainer) {
	                self.eventContainer.removeEventListener(_utilSettings2['default'].getTabEvent(), self.eventFunction, true);
	            }
	
	            if (isEmptyContainer) {
	                if (modalContainer.parentNode) {
	                    modalContainer.parentNode.removeChild(modalContainer);
	                }
	            }
	            if (global.MutationObserver) {
	                var observer = new MutationObserver(function (mutations) {
	                    mutations.forEach(function () {
	                        if (isEmptyContainer) {
	                            modalContainer.parentNode.removeChild(modalContainer);
	                            observer.disconnect();
	                        }
	                    });
	                });
	                observer.observe(modalContainer, { childList: true });
	            } else {
	                modalContainer.addEventListener('DOMNodeRemoved', function (e) {
	                    if (e.target !== modalContainer && modalContainer.childNodes.length - 1 === 0) {
	                        modalContainer.parentNode.removeChild(modalContainer);
	                    }
	                });
	            }
	        }
	    }]);
	
	    return Modal;
	})();
	
	exports['default'] = Modal;
	Modal._modalInstances = [];
	
	// Global keydown listener for modal
	global.addEventListener('keydown', function (e) {
	    if (e.keyCode === KEY_ESC) {
	        var lastModal = Modal._modalInstances[Modal._modalInstances.length - 1];
	        if (lastModal) {
	            _Widget2['default'].findWidget(lastModal).close(e);
	        }
	    }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL01vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFLUSxlQUFlOzs7O3lCQUNsQixZQUFZOzs7O3dCQUNiLFdBQVc7Ozs7c0JBQ1QsUUFBUTs7OztBQUUzQixJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUNyRCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRW5CLElBQU0sZUFBZSxHQUFHLG1CQUFtQixDQUFDO0FBQzVDLElBQU0sVUFBVSxHQUFHLGtCQUFrQixDQUFDO0FBQ3RDLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQzs7O0FBRy9CLElBQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDO0FBQ3RDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUN4QixJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUM7QUFDOUIsSUFBTSxpQkFBaUIsR0FBRyxlQUFlLENBQUM7QUFDMUMsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0FBQ3BDLElBQU0sbUJBQW1CLEdBQUcsaUJBQWlCLENBQUM7QUFDOUMsSUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7QUFDdEMsSUFBTSxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQztBQUNoRCxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7Ozs7Ozs7O0FBUXJCLElBQU0sa0JBQWtCLEdBQUcsc0JBQXNCLENBQUM7Ozs7OztBQUtsRCxJQUFNLHlCQUF5QixHQUFHLDJCQUEyQixDQUFDOzs7Ozs7QUFLOUQsSUFBTSxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQzs7Ozs7OztBQU1sRCxJ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QUczQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQzVDLFFBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7QUFDdkIsWUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RSxZQUFJLFNBQVMsRUFBRTtBQUNYLGdDQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiIvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9ub2RlX21vZHVsZXMvZXNsaW50LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9zcmMvbWFpbi9Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiFcbiAqIEZsZXhDc3MuTW9kYWxcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vKmdsb2JhbCBLZXlib2FyZEV2ZW50Ki9cblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJ3V0aWwvU2V0dGluZ3MnO1xuaW1wb3J0IEV2ZW50IGZyb20gJ3V0aWwvRXZlbnQnO1xuaW1wb3J0IFV0aWwgZnJvbSAndXRpbC9VdGlsJztcbmltcG9ydCBXaWRnZXQgZnJvbSAnV2lkZ2V0JztcblxuY29uc3QgSFRNTF9FTEVNRU5UID0gZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbmNvbnN0IEtFWV9FU0MgPSAyNztcbi8qIEF0dHJpYnV0ZSBOYW1lcyAqL1xuY29uc3QgQVRUUl9DUkVBVEVfTkVXID0gJ2RhdGEtbmV3LWluc3RhbmNlJztcbmNvbnN0IEFUVFJfQ0xPU0UgPSAnZGF0YS1jbG9zZS1tb2RhbCc7XG5jb25zdCBBVFRSX05BTUUgPSAnZGF0YS1tb2RhbCc7XG5cbi8qIENsYXNzIG5hbWVzICovXG5jb25zdCBDTFNfQ09OVEFJTkVSX0NVUlJFTlQgPSAnZnJvbnQnO1xuY29uc3QgQ0xTX09QRU4gPSAnb3Blbic7XG5jb25zdCBDTFNfQ1VSUkVOVCA9ICdjdXJyZW50JztcbmNvbnN0IENMU19QQVJUX09GX1NUQUNLID0gJ3BhcnQtb2Ytc3RhY2snO1xuY29uc3QgQ0xTX01PREFMX09QRU4gPSAnbW9kYWwtb3Blbic7XG5jb25zdCBDTFNfTU9EQUxfQ09OVEFJTkVSID0gJ21vZGFsLWNvbnRhaW5lcic7XG5jb25zdCBDTFNfQU5JTV9FTkQgPSAnbW9kYWwtYW5pbS1lbmQnO1xuY29uc3QgQ0xTX0xPQURFUl9DT05UQUlORVIgPSAnbG9hZGVyLWNvbnRhaW5lcic7XG5jb25zdCBDTFNfTE9BREVSID0gJ2xvYWRlcic7XG5cbi8qIEV2ZW50cyAqL1xuXG4vKipcbiAqIEV2ZW50IHRyaWdnZXJlZCB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX01PREFMX0NMT1NFRCA9ICdmbGV4Y3NzLm1vZGFsLmNsb3NlZCc7XG4vKipcbiAqIEV2ZW50IHRyaWdnZXJlZCBiZWZvcmUgYSBtb2RhbCBpcyBjbG9zZWQsIGNhbmNlbGFibGVcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9NT0RBTF9CRUZPUkVfQ0xPU0VEID0gJ2ZsZXhjc3MubW9kYWwuYmVmb3JlQ2xvc2UnO1xuLyoqXG4gKiBFdmVudCB0cmlnZ2VyZWQgd2hlbiBhIG1vZGFsIGlzIG9wZW5lZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX01PREFMX09QRU5FRCA9ICdmbGV4Y3NzLm1vZGFsLm9wZW5lZCc7XG5cbi8qKlxuICogRXZlbnQgdHJpZ2dlcmVkIHdoZW4gbW9kYWwgaXMgaW5pdGlsaXplZCwgY2FsbGVkIG9uIHRhcmdldFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX01PREFMX0lOSVQgPSAnZmxleGNzcy5tb2RhbC5pbml0JztcblxuLyoqXG4gKiBUcmlnZ2VyZWQgd2hlbiB0aGUgY29udGVudCBvZiBhbiBhc3luYyBtb2RhbCBvbiBhIHRhcmdldCBpcyBsb2FkZWQsIGNhbGxlZCBvbiB0YXJnZXRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9NT0RBTF9BU1lOQ19UQVJHRVRfTE9BREVEID0gJ2ZsZXhjc3MubW9kYWwuYXN5bmNUYXJnZXRMb2FkZWQnO1xuXG4vKipcbiAqIEEgTW9kYWwgSW1wbGVtZW50YXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcihEZWxlZ2F0ZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50LCBjb250YWluZXIgPSBEZWxlZ2F0ZUNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID9cbiAgICAgICAgICAgIERlbGVnYXRlQ29udGFpbmVyIDogZG9jLmdldEVsZW1lbnRCeUlkKERlbGVnYXRlQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBJbnN0YW5jZSB2YXJzOlxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhyb3cgJ0NvdWxkIG5vdCBmb3VuZCBjb250YWluZXIgZWxlbWVudCBieSBnaXZlbiBJRC9FbGVtZW50OiAnICsgRGVsZWdhdGVDb250YWluZXI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRPcGVuID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBPcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWVzOiAnbW9kYWwnLFxuICAgICAgICAgICAgY2xvc2VPbkVzY2FwZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlT25CYWNrZ3JvdW5kQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBkZXN0cm95T25GaW5pc2g6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWVzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBDb250YWluZXIgd2hlcmUgZXZlbnRzIGFyZSBkZWxlZ2F0ZWRcbiAgICAgICAgdGhpcy5ldmVudENvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMuZXZlbnRGdW5jdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5kYXRhTWFpblBhZ2VDb250YWluZXIgPSBnbG9iYWwuZG9jdW1lbnQuYm9keTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRTY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgIHRoaXMubW9kYWxDb250YWluZXIgPSBudWxsO1xuXG4gICAgICAgIC8vIERlc3Ryb3kgZnVsbCBtb2RhbCBpbnN0YW5jZSB3aGVuIG5vIGRpYWxvZ3MgYXJlIGJpbmQgdG8/XG4gICAgICAgIC8vIE90aGVyd2lzZSBjb250YWluZXIgaXMgcmVjeWNsZWRcbiAgICAgICAgdGhpcy5kZXN0cm95T25GaW5pc2ggPSB0aGlzLm9wdGlvbnMuZGVzdHJveU9uRmluaXNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhpcyBtb2RhbCBmcm9tIGdsb2JhbCBzdGFja1xuICAgICAqIFdpbGwgaGFuZGxlIGZpeGluZyBtYWluIGh0bWwgZWxlbWVudCB0b29cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSBuXG4gICAgICovXG4gICAgX3JlbW92ZU1vZGFsRnJvbVN0YWNrKG4pIHtcbiAgICAgICAgdmFyIHQgPSBNb2RhbC5fbW9kYWxJbnN0YW5jZXMuaW5kZXhPZihuKSwgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0ID4gLTEpIHtcbiAgICAgICAgICAgIE1vZGFsLl9tb2RhbEluc3RhbmNlcy5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgICBpZiAoTW9kYWwuX21vZGFsSW5zdGFuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHJlc3RvcmUgc2Nyb2xsUG9zaXRpb246XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YU1haW5QYWdlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5maXhlZENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF0YU1haW5QYWdlQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRhdGFNYWluUGFnZUNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IHNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBzZWxmLmN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzZWxmLmN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5nZXQoKS5zY3JvbGxiYXJVcGRhdGVOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgSFRNTF9FTEVNRU5ULmNsYXNzTGlzdC5yZW1vdmUoQ0xTX01PREFMX09QRU4pO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1vZGFsIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGFsbCBgc3RhY2tlZGAgbW9kYWxzIGZvciB0aGlzIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldE1vZGFsQ29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGN1cnJlbnQgb3BlbiBtb2RhbCBvZiB0aGlzIHN0YWNrXG4gICAgICogQHBhcmFtcyBbZV0sIG9wdGlvbmFsIGV2ZW50XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY2xvc2UoZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHNlbGYuY3VycmVudE9wZW4gPyBVdGlsLmFwcGx5T3B0aW9uc0Zyb21FbGVtZW50KFxuICAgICAgICAgICAgc2VsZi5jdXJyZW50T3BlbiwgVXRpbC5jb3B5KHNlbGYub3B0aW9ucykpIDogc2VsZi5vcHRpb25zO1xuXG4gICAgICAgIC8vIGNsb3NlIG9ubHkgb24ga2V5Ym9hcmQgaWYgaW5zdGFuY2Ugc2hvdWxkXG4gICAgICAgIGlmICghb3B0aW9ucy5jbG9zZU9uRXNjYXBlICYmIGUgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSBvbmx5IG9uIGJhY2tncm91bmQgaWYgaW5zdGFuY2Ugc2hvdWxkXG4gICAgICAgIGlmICghb3B0aW9ucy5jbG9zZU9uQmFja2dyb3VuZENsaWNrICYmIGUgJiZcbiAgICAgICAgICAgIGUudHlwZSA9PT0gU2V0dGluZ3MuZ2V0VGFiRXZlbnQoKSAmJiAhZS50YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfQ0xPU0UpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhbiBpbnN0YW5jZSBpcyBjdXJyZW50bHkgbG9hZGluZywgcHJldmVudCBmcm9tIGNsb3NpbmdcbiAgICAgICAgaWYgKHNlbGYubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmN1cnJlbnRPcGVuKSB7XG4gICAgICAgICAgICAvLyBkaXNwYXRjaCBiZWZvcmVDbG9zZSBldmVudCwgaWYgcHJldmVudGVkIHByZXZlbnQgbW9kYWwgZnJvbSBjbG9zaW5nXG4gICAgICAgICAgICB2YXIgZXYgPSBFdmVudC5kaXNwYXRjaEFuZEZpcmUoc2VsZi5jdXJyZW50T3BlbiwgRVZFTlRfTU9EQUxfQkVGT1JFX0NMT1NFRCk7XG4gICAgICAgICAgICBpZiAoZXYuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZmluaXNoU3RhdGUoc2VsZi5jdXJyZW50T3Blbik7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbiBwcmV2aW91cyBtb2RhbFxuICAgICAgICAgICAgaWYgKHNlbGYuY3VycmVudE9wZW4ucHJldk1vZGFsKSB7XG4gICAgICAgICAgICAgICAgLy8gc3dpdGNoIHRvIHRoZSBuZXh0IG1vZGFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuc3dpdGNoTW9kYWxzKHNlbGYuY3VycmVudE9wZW4ucHJldk1vZGFsLFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRPcGVuLnByZXZNb2RhbC5wcmV2TW9kYWwgfHwgbnVsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbmFsbHkgdHJpZ2dlciBjbG9zZWQgZXZlbnRcbiAgICAgICAgICAgIEV2ZW50LmRpc3BhdGNoKHNlbGYuY3VycmVudE9wZW4sIEVWRU5UX01PREFMX0NMT1NFRCkud2l0aE9yaWdpbmFsKGUpLmZpcmUoKTtcblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuX3JlbW92ZU1vZGFsRnJvbVN0YWNrKHNlbGYuY3VycmVudE9wZW4pO1xuXG4gICAgICAgIC8vIEZ1bGwgc3RhY2sgY2xvc2VkOlxuICAgICAgICBzZWxmLmN1cnJlbnRPcGVuID0gbnVsbDtcbiAgICAgICAgaWYgKHNlbGYubW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgIC8vIHNldHVwIG5leHQgb3BlblxuICAgICAgICAgICAgdmFyIGxhc3RDb250YWluZXIgPSBNb2RhbC5fbW9kYWxJbnN0YW5jZXNbTW9kYWwuX21vZGFsSW5zdGFuY2VzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdCA9IHNlbGYubW9kYWxDb250YWluZXIuY2xhc3NMaXN0O1xuICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShDTFNfQ09OVEFJTkVSX0NVUlJFTlQpO1xuICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShDTFNfT1BFTik7XG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgY2xhc3NlcyBmcm9tIGNoaWxkLW5vZGVzXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYubW9kYWxDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gc2VsZi5tb2RhbENvbnRhaW5lci5jaGlsZE5vZGVzW2ldLCBjbCA9IG5vZGUuY2xhc3NMaXN0O1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhcHBsaWVkIHN0eWxlc1xuICAgICAgICAgICAgICAgIHNlbGYuX2ZpbmlzaFN0YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGNsLnJlbW92ZShDTFNfQ1VSUkVOVCk7XG4gICAgICAgICAgICAgICAgY2wucmVtb3ZlKENMU19QQVJUX09GX1NUQUNLKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgbGFzdENvbnRhaW5lci5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoQ0xTX0NPTlRBSU5FUl9DVVJSRU5UKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmRlc3Ryb3lPbkZpbmlzaCkge1xuICAgICAgICAgICAgc2VsZi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIGEgdGFyZ2V0IHdoZW4gbmV3bHkgaW5pdGlsaXplc1xuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9maW5pc2hTdGF0ZSh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0FOSU1fRU5EKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGNhbGxlZCB3aGVuIGEgTW9kYWwgaGFzIGZpbmlzaGVkIGFuIGFuaW1hdGlvblxuICAgICAqIEBwYXJhbSBlXG4gICAgICogQHBhcmFtIHNlbGZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9maW5pc2hBbmltKGUsIHNlbGYpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChDTFNfQU5JTV9FTkQpO1xuICAgICAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgc2VsZiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnJpbmdzIHRoZSBnaXZlbiBtb2RhbCB0byBmcm9udFxuICAgICAqIEBwYXJhbSBjb1xuICAgICAqIEBwYXJhbSBsYXN0XG4gICAgICovXG4gICAgc3dpdGNoTW9kYWxzKGNvLCBsYXN0KSB7XG4gICAgICAgIGNvLnByZXZNb2RhbCA9IGxhc3Q7XG4gICAgICAgIE1vZGFsLl9tb2RhbEluc3RhbmNlcy5wdXNoKGNvKTtcblxuICAgICAgICBpZiAobGFzdCkge1xuICAgICAgICAgICAgdGhpcy5fZmluaXNoU3RhdGUobGFzdCk7XG4gICAgICAgICAgICBVdGlsLnByZWZpeGVkQW5pbWF0ZUV2ZW50KGxhc3QsICdBbmltYXRpb25FbmQnLCB0aGlzLl9maW5pc2hBbmltKTtcbiAgICAgICAgICAgIGxhc3QuY2xhc3NMaXN0LmFkZChDTFNfUEFSVF9PRl9TVEFDSyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IG5ldyBjdXJyZW50T3BlblxuICAgICAgICB0aGlzLmN1cnJlbnRPcGVuID0gY287XG5cbiAgICAgICAgLy8gYnJpbmcgY3VycmVudCBjb250YWluZXIgdG8gdGhlIGZyb250XG4gICAgICAgIHZhciBpbnN0YW5jZXMgPSBNb2RhbC5fbW9kYWxJbnN0YW5jZXM7XG5cbiAgICAgICAgZm9yICh2YXIgbSA9IDA7IG0gPCBpbnN0YW5jZXMubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICAgIGluc3RhbmNlc1ttXS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0NPTlRBSU5FUl9DVVJSRU5UKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQ0xTX0NPTlRBSU5FUl9DVVJSRU5UKTtcbiAgICAgICAgLy8gcmVtb3ZlIGFuaW1hdGlvbnMgaWYgYW5pbWF0aW9ucyBoYXMgYmVlbiBjb21wbGV0ZWQsIGZpeGVzIHZhcmlvdXMgYnVnczpcbiAgICAgICAgLy8gLSBmaXhlcyBuZXN0ZWQgc2Nyb2xsaW5nIGVsZW1lbnQgaXNzdWUgaW4gaU9TIEJyb3dzZXJzIC8gTW9iaWxlLVNhZmFyaVxuICAgICAgICBVdGlsLnByZWZpeGVkQW5pbWF0ZUV2ZW50KGNvLCAnQW5pbWF0aW9uRW5kJywgdGhpcy5fZmluaXNoQW5pbSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vZGFsQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5tb2RhbENvbnRhaW5lci5jaGlsZE5vZGVzW2ldLCBpc0N1cnJlbnQgPSBuLmNsYXNzTGlzdC5jb250YWlucyhDTFNfQ1VSUkVOVCk7XG4gICAgICAgICAgICBpZiAobiA9PT0gY28pIHtcbiAgICAgICAgICAgICAgICBjby5jbGFzc0xpc3QuYWRkKENMU19DVVJSRU5UKTtcbiAgICAgICAgICAgICAgICBjby5jbGFzc0xpc3QucmVtb3ZlKENMU19QQVJUX09GX1NUQUNLKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5pc2hTdGF0ZShjbyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG4uY2xhc3NMaXN0LnJlbW92ZShDTFNfQ1VSUkVOVCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVNb2RhbEZyb21TdGFjayhuKTtcbiAgICAgICAgICAgICAgICAgICAgRXZlbnQuZGlzcGF0Y2hBbmRGaXJlKG4sIEVWRU5UX01PREFMX0NMT1NFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsYmFyKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChNb2RhbC5fbW9kYWxJbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBzYXZlIGN1cnJlbnQgc2Nyb2xsVG9wOlxuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCwgYztcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZml4ZWRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3AgPSBnbG9iYWwucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgYyA9IHNlbGYuZGF0YU1haW5QYWdlQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMgY2F1c2VzIHJlZmxvdy9wYWludCBhbmQgc2hvdWxkIGJlIG9wdGltaXplZFxuICAgICAgICAgICAgLy8gQXQgbGVzdCB3ZSB3cml0ZSBpbiBhIGJhdGNoIGxhdGVyXG4gICAgICAgICAgICBTZXR0aW5ncy5nZXQoKS5zY3JvbGxiYXJVcGRhdGVOb2Rlcy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuOiBuLCBwYWRkaW5nOiBwYXJzZUludChnbG9iYWwuZ2V0Q29tcHV0ZWRTdHlsZShuKS5wYWRkaW5nUmlnaHQpICtcbiAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3MuZ2V0U2Nyb2xsYmFyV2lkdGgoKSArICdweCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGQubi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBkLnBhZGRpbmc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZml4ZWRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgICAgICBjLnN0eWxlLmNzc1RleHQgKz0gYHRvcDoke3Njcm9sbFRvcCAqIC0xICsgJ3B4J307cG9zaXRpb246Zml4ZWRgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEhUTUxfRUxFTUVOVC5jbGFzc0xpc3QuYWRkKENMU19NT0RBTF9PUEVOKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBNb2RhbCBhbmQgb3BlbnMgaXQgKGxhdGVyKVxuICAgICAqIEBwYXJhbSBlXG4gICAgICogQHJldHVybnMge1Byb21pc2V8Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjcmVhdGVXaWRnZXQoZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGFub3RoZXIgbW9kYWwgaGFzIHJlZ2lzdGVyZWQgZXZlbnRzIG9uIHRoaXMgZG9tIHBhdGg6XG4gICAgICAgIGlmIChlICYmIGUudGFyZ2V0KSB7XG4gICAgICAgICAgICB2YXIgZm91bmRJbnN0YW5jZSA9IFV0aWwucGFyZW50c1VudGlsKGUudGFyZ2V0LCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlICYmIG5vZGUuZmxleE1vZGFsSW5zdGFuY2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gaWYgYW5vdGhlciBpbnN0YW5jZSBoYXMgYmVlbiBmb3VuZCwgYWJvcnRcbiAgICAgICAgICAgIGlmIChmb3VuZEluc3RhbmNlICE9PSB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0Q29udGVudCwgZnV0dXJlLCB3aWRnZXQsIHRhcmdldCwgaGFzVGFyZ2V0ID0gdHJ1ZSxcbiAgICAgICAgICAgIGlzSHRtbEVsZW1lbnQgPSBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQsIGlzV2lkZ2V0ID0gV2lkZ2V0LmlzV2lkZ2V0KGUpO1xuICAgICAgICBpZiAoaXNIdG1sRWxlbWVudCB8fCBpc1dpZGdldCkge1xuICAgICAgICAgICAgaWYgKGlzSHRtbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRDb250ZW50ID0gZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0ID0gZTtcbiAgICAgICAgICAgICAgICB0YXJnZXRDb250ZW50ID0gd2lkZ2V0LmVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NvdWxkIG5vdCBmaW5kIHRhcmdldCwgZGlkIHlvdSBwYXNzIGFuIGV2ZW50LCBhIEhUTUxFbGVtZW50IG9yIGFuIFdpZGdldD8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFzVGFyZ2V0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpO1xuICAgICAgICAgICAgdGFyZ2V0Q29udGVudCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKTtcbiAgICAgICAgICAgIHdpZGdldCA9IFdpZGdldC5maW5kV2lkZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZShBVFRSX0NSRUFURV9ORVcpICYmICFlLm5ld0luc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0luc3RhbmNlID0gbmV3IE1vZGFsKHRoaXMuY29udGFpbmVyKVxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzdHJveU9uRmluaXNoKHRydWUpO1xuICAgICAgICAgICAgICAgIGUubmV3SW5zdGFuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG5ld0luc3RhbmNlLmZyb21FdmVudChlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5zdGFuY2UucmVnaXN0ZXJFdmVudHMobmV3SW5zdGFuY2UuZ2V0TW9kYWxDb250YWluZXIoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb2RhbENvbnRhaW5lckNsYXNzZXMgPSB0aGlzLm1vZGFsQ29udGFpbmVyID8gdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QgOiBbXTtcblxuICAgICAgICAvLyBsYXp5IGNyZWF0ZSBtb2RhbCBjb250YWluZXJcbiAgICAgICAgaWYgKCF0aGlzLm1vZGFsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc05hbWUgPSBgJHtDTFNfTU9EQUxfQ09OVEFJTkVSfSAke3RoaXMub3B0aW9ucy5jb250YWluZXJDbGFzc05hbWVzfSAke0NMU19PUEVOfWA7XG4gICAgICAgICAgICBjb25zdCBjbG9zZU1vZGFsRnVuY3Rpb24gPSBmdW5jdGlvbiAoY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuaXNQYXJ0T2ZOb2RlKGNlLnRhcmdldCwgc2VsZi5jdXJyZW50T3BlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjZS50YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfQ0xPU0UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5jbG9zZShjZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoU2V0dGluZ3MuZ2V0VGFiRXZlbnQoKSwgY2xvc2VNb2RhbEZ1bmN0aW9uLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyQ2xhc3NlcyA9IHRoaXMubW9kYWxDb250YWluZXIuY2xhc3NMaXN0O1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbENvbnRhaW5lcik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyQ2xhc3Nlcy5hZGQoQ0xTX09QRU4pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvYWRlciwgZG9jID0gZ2xvYmFsLmRvY3VtZW50LCB0b2dnbGVMb2FkZXIgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbG9hZGVyLmNsYXNzTmFtZSA9IENMU19MT0FERVJfQ09OVEFJTkVSO1xuICAgICAgICAgICAgICAgIHZhciBsb2FkZXJMb2FkZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbG9hZGVyTG9hZGVyLmNsYXNzTmFtZSA9IENMU19MT0FERVI7XG4gICAgICAgICAgICAgICAgbG9hZGVyLmFwcGVuZENoaWxkKGxvYWRlckxvYWRlcik7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsYmFyKCk7XG5cbiAgICAgICAgbW9kYWxDb250YWluZXJDbGFzc2VzLmFkZChDTFNfQ09OVEFJTkVSX0NVUlJFTlQpO1xuICAgICAgICBtb2RhbENvbnRhaW5lckNsYXNzZXMuYWRkKCdsb2FkaW5nJyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRvZ2dsZUxvYWRlcih0cnVlKTtcbiAgICAgICAgdmFyIGFzeW5jID0gd2lkZ2V0ID8gd2lkZ2V0LmdldEFzeW5jKCkgOiBudWxsO1xuICAgICAgICBpZiAoV2lkZ2V0LmlzV2lkZ2V0KHdpZGdldCkgJiYgYXN5bmMpIHtcbiAgICAgICAgICAgIGZ1dHVyZSA9IGFzeW5jLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmIChyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgciBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyIEVsZW1lbnQ6XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHNlbGYub3B0aW9ucy5jbGFzc05hbWVzO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHI7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBVdGlsLmd1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmZpbmFsQ29udGVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBFdmVudC5kaXNwYXRjaEFuZEZpcmUodGFyZ2V0LCBFVkVOVF9NT0RBTF9BU1lOQ19UQVJHRVRfTE9BREVEKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZWwgPSB0YXJnZXRDb250ZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgICAgIHRhcmdldENvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50ID8gdGFyZ2V0Q29udGVudCA6IGRvYy5nZXRFbGVtZW50QnlJZCh0YXJnZXRDb250ZW50KTtcbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGZ1dHVyZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ291bGQgbm90IGZvdW5kIGdpdmVuIG1vZGFsIGVsZW1lbnQgKGNvbnRlbnQpIHdpdGggSUQ6ICcgKyB0YXJnZXRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnQuZGlzcGF0Y2hBbmRGaXJlKHRhcmdldCwgRVZFTlRfTU9EQUxfSU5JVCk7XG5cbiAgICAgICAgcmV0dXJuIGZ1dHVyZS50aGVuKCh0aGlzRWwpID0+IHtcbiAgICAgICAgICAgIHRoaXNFbC5oZldpZGdldEluc3RhbmNlID0gc2VsZjtcbiAgICAgICAgICAgIHNlbGYubW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpc0VsKTtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyQ2xhc3Nlcy5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgIHNlbGYubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdG9nZ2xlTG9hZGVyKGZhbHNlKTtcblxuICAgICAgICAgICAgc2VsZi5vcGVuKHRoaXNFbCwgdHJ1ZSwgZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzRWw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4ncyBhbiBhbHJlYWR5IHJlbmRlcmVkIG1vZGFsXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnRlcm5hbF0sIHNldCB0byB0cnVlIHRvIHByZXZlbnQgY29udGFpbmVyIG1hbmFnZW1lbnRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXliZUV2ZW50XSwgb3B0aW9uYWwgZXZlbnQtb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIG9wZW5cbiAgICAgKi9cbiAgICBvcGVuKG1vZGFsLCBpbnRlcm5hbCwgbWF5YmVFdmVudCkge1xuXG5cbiAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbGJhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3dpdGNoTW9kYWxzKG1vZGFsLCB0aGlzLmN1cnJlbnRPcGVuKTtcblxuICAgICAgICBFdmVudC5kaXNwYXRjaChtb2RhbCwgRVZFTlRfTU9EQUxfT1BFTkVEKS53aXRoT3JpZ2luYWwobWF5YmVFdmVudCkuZmlyZSgpO1xuICAgIH1cblxuXG4gICAgcmVnaXN0ZXJFdmVudHMoZGVsZWdhdGUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlQ29udGFpbmVyID0gZGVsZWdhdGUgfHwgdGhpcy5jb250YWluZXIsIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyIG1vZGFsIGluc3RhbmNlIHNvIHdlIGNhbiBkZXRlY3QgbXVsdGlwbGUgcmVnaXN0cmFyc1xuICAgICAgICBkZWxlZ2F0ZUNvbnRhaW5lci5mbGV4TW9kYWxJbnN0YW5jZSA9IHNlbGY7XG4gICAgICAgIHNlbGYuZXZlbnRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuY3JlYXRlV2lkZ2V0LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIGRlbGVnYXRlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoU2V0dGluZ3MuZ2V0VGFiRXZlbnQoKSwgc2VsZi5ldmVudEZ1bmN0aW9uLCBmYWxzZSk7XG5cbiAgICAgICAgc2VsZi5ldmVudENvbnRhaW5lciA9IGRlbGVnYXRlQ29udGFpbmVyO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgRGlhbG9nIEluc3RhbmNlIGVpdGhlciBkaXJlY3RseSBmcm9tIEhUTUwgRWxlbWVudCBvciBhIFdpZGdldCBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8V2lkZ2V0fSB3aWRnZXQgaW5zdGFuY2Ugb3IgaHRtbCBlbGVtZW50XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZnJvbVdpZGdldCh3aWRnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlV2lkZ2V0KHdpZGdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFdpZGdldCBmcm9tIGV2ZW50XG4gICAgICogQHBhcmFtIGVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBmcm9tRXZlbnQoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVXaWRnZXQoZSk7XG4gICAgfVxuXG4gICAgc2V0RGVzdHJveU9uRmluaXNoKHYpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95T25GaW5pc2ggPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoaXMgd2lkZ2V0IGluc3RhbmNlLCBjbGVhbnMgZW1wdHkgRE9NIG5vZGVzXG4gICAgICogV2lsbCB1c2UgZmFzdCBNdXRhdGlvbk9ic2VydmVyIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGZhbGxzIGJhY2sgdG8gRE9NTm9kZVJlbW92ZWQgZXZlbnRcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXMsIG1vZGFsQ29udGFpbmVyID0gdGhpcy5tb2RhbENvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgaXNFbXB0eUNvbnRhaW5lciA9IG1vZGFsQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwO1xuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gZGVzdHJveSwgZG8gbm90IHJlbW92ZSBET00gbm9kZVxuICAgICAgICBpZiAoc2VsZi5ldmVudENvbnRhaW5lcikge1xuICAgICAgICAgICAgc2VsZi5ldmVudENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFNldHRpbmdzLmdldFRhYkV2ZW50KCksIHNlbGYuZXZlbnRGdW5jdGlvbiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbXB0eUNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKG1vZGFsQ29udGFpbmVyLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlUmVtb3ZlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBtb2RhbENvbnRhaW5lciAmJiAobW9kYWxDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBTdGF0aWMgdmFyaWFibGUgdGhhdCBrZWVwcyB0cmFjayBvZiBhbGwgb3BlbiBtb2RhbHNcbk1vZGFsLl9tb2RhbEluc3RhbmNlcyA9IFtdO1xuXG4vLyBHbG9iYWwga2V5ZG93biBsaXN0ZW5lciBmb3IgbW9kYWxcbmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlfRVNDKSB7XG4gICAgICAgIHZhciBsYXN0TW9kYWwgPSBNb2RhbC5fbW9kYWxJbnN0YW5jZXNbTW9kYWwuX21vZGFsSW5zdGFuY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAobGFzdE1vZGFsKSB7XG4gICAgICAgICAgICBXaWRnZXQuZmluZFdpZGdldChsYXN0TW9kYWwpLmNsb3NlKGUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.Widget
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	/**
	 * A Widget provides async content on a specific target (e.g. a modal link)
	 */
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Promise = __webpack_require__(38)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var Widget = (function () {
	
	  /**
	   * Creates a new Widget
	   * @param [element], optional define the content of widget
	   */
	
	  function Widget(element) {
	    var _this = this;
	
	    _classCallCheck(this, Widget);
	
	    /**
	     *
	     * @type {Promise}
	     */
	    this.asyncContent = null;
	
	    /**
	     * @type {boolean}
	     */
	    this._isWidget = true;
	
	    if (element) {
	      /**
	       * @type {HTMLElement}
	       */
	      this.element = element instanceof HTMLElement ? element : global.document.getElementById(element);
	      if (this.element) {
	        this.element.hfWidgetInstance = this;
	        this.setAsync((function () {
	          return new _Promise((function (s) {
	            s(_this.element);
	          }).bind(_this));
	        }).bind(this));
	      } else {
	        throw 'Could not found element with ID: ' + element;
	      }
	    }
	    /**
	     * The final resulted content that a widget did create (e.g. a modal container)
	     * @type {HTMLElement}
	     */
	    this.finalContent = null;
	  }
	
	  /**
	   *
	   * @returns {Promise}
	   */
	
	  _createClass(Widget, [{
	    key: 'getAsync',
	    value: function getAsync() {
	      return this.asyncContent();
	    }
	
	    /**
	     * @param {Function.<Promise>} async
	     * @returns {Widget}
	     */
	  }, {
	    key: 'setAsync',
	    value: function setAsync(async) {
	      this.asyncContent = async;
	      return this;
	    }
	
	    /**
	     * @returns {HTMLElement}
	     */
	  }, {
	    key: 'getFinalContent',
	    value: function getFinalContent() {
	      return this.finalContent;
	    }
	
	    /**
	     * @param {HTMLElement} element
	     * @returns {Widget}
	     */
	  }, {
	    key: 'setElement',
	    value: function setElement(element) {
	      this.element = element;
	      return this;
	    }
	
	    /**
	     * Destroys the generated content of this widget
	     * @returns {boolean}
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	
	      if (this.finalContent && this.finalContent.parentNode) {
	        this.finalContent.parentNode.removeChild(this.finalContent);
	        return true;
	      }
	
	      delete this.element;
	      delete this.asyncContent;
	      delete this.finalContent;
	
	      return false;
	    }
	
	    /**
	     * Will find a widget on an Element
	     * @param {HTMLElement} element
	     * @returns {Widget|undefined}
	     */
	  }], [{
	    key: 'findWidget',
	    value: function findWidget(element) {
	      return element ? element.hfWidgetInstance : undefined;
	    }
	
	    /**
	     * Checks if a given object is an instance
	     * @param {Object} self
	     * @returns {boolean}
	     */
	  }, {
	    key: 'isWidget',
	    value: function isWidget(self) {
	      return self instanceof Widget || typeof self === 'object' && self.hasOwnProperty('_isWidget');
	    }
	  }]);
	
	  return Widget;
	})();
	
	exports['default'] = Widget;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL1dpZGdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lBTVAsTUFBTTs7Ozs7OztBQU1HLFdBTlQsTUFBTSxDQU1JLE9BQU8sRUFBRTs7OzBCQU5uQixNQUFNOzs7Ozs7QUFZSixRQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7Ozs7QUFLekIsUUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O0FBRXRCLFFBQUksT0FBTyxFQUFFOzs7O0FBSVQsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLFlBQVksV0FBVyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRyxVQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDZCxZQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUNyQyxZQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBTTtBQUNqQixpQkFBTyxhQUFZLENBQUMsVUFBQyxDQUFDLEVBQUs7QUFDdkIsYUFBQyxDQUFDLE1BQUssT0FBTyxDQUFDLENBQUM7V0FDbkIsQ0FBQSxDQUFFLElBQUksT0FBTSxDQUFDLENBQUM7U0FDbEIsQ0FBQSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO09BQ2xCLE1BQU07QUFDSCxjQUFNLG1DQUFtQyxHQUFHLE9BQU8sQ0FBQztPQUN2RDtLQUNKOzs7OztBQUtELFFBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0dBQzVCOzs7Ozs7O2VBeENDLE1BQU07O1dBOENBLG9CQUFHO0FBQ1AsYUFBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDOUI7Ozs7Ozs7O1dBTU8sa0JBQUMsS0FBSyxFQUFFO0FBQ1osVUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDMUIsYUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztXQUtjLDJCQUFHO0FBQ2QsYUFBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzVCOzs7Ozs7OztXQU1TLG9CQUFDLE9BQU8sRUFBRTtBQUNoQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixhQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7OztXQU1NLG1CQUFHOztBQUVOLFVBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTtBQUNuRCxZQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVELGVBQU8sSUFBSSxDQUFDO09BQ2Y7O0FBRUQsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3BCLGFBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztBQUN6QixhQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7O0FBRXpCLGFBQU8sS0FBSyxDQUFDO0tBQ2hCOzs7Ozs7Ozs7V0FPZ0Isb0JBQUMsT0FBTyxFQUFFO0FBQ3ZCLGFBQU8sT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7S0FDekQ7Ozs7Ozs7OztXQU9jLGtCQUFDLElBQUksRUFBRTtBQUNsQixhQUFPLElBQUksWUFBWSxNQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakc7OztTQTdHQyxNQUFNOzs7cUJBQU4sTUFBTSIsImZpbGUiOiIvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9ub2RlX21vZHVsZXMvZXNsaW50LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9zcmMvbWFpbi9XaWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyohXG4gKiBGbGV4Q3NzLldpZGdldFxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgV2lkZ2V0IHByb3ZpZGVzIGFzeW5jIGNvbnRlbnQgb24gYSBzcGVjaWZpYyB0YXJnZXQgKGUuZy4gYSBtb2RhbCBsaW5rKVxuICovXG5leHBvcnQgZGVmYXVsdFxuY2xhc3MgV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgV2lkZ2V0XG4gICAgICogQHBhcmFtIFtlbGVtZW50XSwgb3B0aW9uYWwgZGVmaW5lIHRoZSBjb250ZW50IG9mIHdpZGdldFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1Byb21pc2V9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFzeW5jQ29udGVudCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faXNXaWRnZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudCA6IGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaGZXaWRnZXRJbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBc3luYygoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ291bGQgbm90IGZvdW5kIGVsZW1lbnQgd2l0aCBJRDogJyArIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaW5hbCByZXN1bHRlZCBjb250ZW50IHRoYXQgYSB3aWRnZXQgZGlkIGNyZWF0ZSAoZS5nLiBhIG1vZGFsIGNvbnRhaW5lcilcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maW5hbENvbnRlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZ2V0QXN5bmMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzeW5jQ29udGVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb24uPFByb21pc2U+fSBhc3luY1xuICAgICAqIEByZXR1cm5zIHtXaWRnZXR9XG4gICAgICovXG4gICAgc2V0QXN5bmMoYXN5bmMpIHtcbiAgICAgICAgdGhpcy5hc3luY0NvbnRlbnQgPSBhc3luYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldEZpbmFsQ29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluYWxDb250ZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7V2lkZ2V0fVxuICAgICAqL1xuICAgIHNldEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyB0aGUgZ2VuZXJhdGVkIGNvbnRlbnQgb2YgdGhpcyB3aWRnZXRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmZpbmFsQ29udGVudCAmJiB0aGlzLmZpbmFsQ29udGVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmFsQ29udGVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZmluYWxDb250ZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudDtcbiAgICAgICAgZGVsZXRlIHRoaXMuYXN5bmNDb250ZW50O1xuICAgICAgICBkZWxldGUgdGhpcy5maW5hbENvbnRlbnQ7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpbGwgZmluZCBhIHdpZGdldCBvbiBhbiBFbGVtZW50XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHtXaWRnZXR8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kV2lkZ2V0KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50LmhmV2lkZ2V0SW5zdGFuY2UgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGEgZ2l2ZW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGZcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNXaWRnZXQoc2VsZikge1xuICAgICAgICByZXR1cm4gc2VsZiBpbnN0YW5jZW9mIFdpZGdldCB8fCB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5oYXNPd25Qcm9wZXJ0eSgnX2lzV2lkZ2V0Jyk7XG4gICAgfVxufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _Modal = __webpack_require__(104);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _Widget = __webpack_require__(105);
	
	var _Widget2 = _interopRequireDefault(_Widget);
	
	// default export as component object
	exports['default'] = {
	    Modal: _Modal2['default'],
	    Settings: _utilSettings2['default'],
	    Widget: _Widget2['default']
	};
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL21vZHVsZXMvTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7OztxQkFFSyxPQUFPOzs7OzRCQUNKLGVBQWU7Ozs7c0JBQ2pCLFFBQVE7Ozs7O3FCQUdaO0FBQ1gsU0FBSyxvQkFBTztBQUNaLFlBQVEsMkJBQVU7QUFDbEIsVUFBTSxxQkFBUTtDQUNqQiIsImZpbGUiOiIvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9ub2RlX21vZHVsZXMvZXNsaW50LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9zcmMvbWFpbi9tb2R1bGVzL01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnTW9kYWwnO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJ3V0aWwvU2V0dGluZ3MnO1xuaW1wb3J0IFdpZGdldCBmcm9tICdXaWRnZXQnO1xuXG4vLyBkZWZhdWx0IGV4cG9ydCBhcyBjb21wb25lbnQgb2JqZWN0XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTW9kYWw6IE1vZGFsLFxuICAgIFNldHRpbmdzOiBTZXR0aW5ncyxcbiAgICBXaWRnZXQ6IFdpZGdldFxufTtcbiJdfQ==

/***/ }
/******/ ])
});
;
//# sourceMappingURL=../maps/modal.map