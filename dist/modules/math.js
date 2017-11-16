(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xd"] = factory();
	else
		root["xd"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 类型模块
 *
 * 
 */

var xdType = {

  /* 通用类型判断 */
  getType: function getType(obj) {
    if (Number.isNaN(obj)) return 'NaN';
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'Infinity';
    if (obj === null) return String(obj);else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1];
  },


  /* 类型判断 */
  isStr: function isStr(obj) {
    return this.getType(obj) === 'string';
  },
  isNum: function isNum(obj) {
    return this.getType(obj) === 'number';
  },
  isArr: function isArr(obj) {
    return this.getType(obj) === 'array';
  },
  isObj: function isObj(obj) {
    return this.getType(obj) === 'object';
  },
  isFunc: function isFunc(obj) {
    return this.getType(obj) === 'function';
  },
  isRegExp: function isRegExp(obj) {
    return this.getType(obj) === 'regexp';
  },
  isBool: function isBool(obj) {
    return this.getType(obj) === 'boolean';
  },
  isDate: function isDate(obj) {
    return this.getType(obj) === 'date';
  },
  isNull: function isNull(obj) {
    return this.getType(obj) === 'null';
  },
  isUndefined: function isUndefined(obj) {
    return this.getType(obj) === 'undefined';
  },


  /* 类型转换 */
  toStr: function toStr(obj) {
    return obj.toString();
  },
  toNum: function toNum(obj) {
    return Number(obj);
  },
  toBool: function toBool(obj) {
    return !!obj;
  },
  objToArr: function objToArr(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  }
};

module.exports = xdType;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _type = __webpack_require__(0);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUM_1000 = 1000; /**
                      * 算术模块
                      *
                      * 
                      */

var NUM_1024 = 1024;

var xdMath = {
  sum: function sum() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    if (_type2.default.isArr(arr[0])) arr = arr[0];
    return arr.reduce(function (acc, val) {
      return acc + _type2.default.toNum(val);
    });
  },
  mean: function mean() {
    for (var _len2 = arguments.length, arr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (_type2.default.isArr(arr[0])) arr = arr[0];
    var sum = this.sum(arr);
    var count = arr.length;
    return sum / count;
  },
  multiply: function multiply(numA, numB) {
    var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return _type2.default.toNum(numA) * Math.pow(numB, _type2.default.toNum(times));
  },
  multiply1k: function multiply1k(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.multiply(num, 1000, times);
  },
  multiply1024: function multiply1024(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.multiply(num, 1024, times);
  },
  devide: function devide(numA, numB) {
    var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return _type2.default.toNum(numA) / Math.pow(numB, _type2.default.toNum(times));
  },
  devide1k: function devide1k(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.devide(num, 1000, times);
  },
  devide1024: function devide1024(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.devide(num, 1024, times);
  },


  /* 补零 */
  fillZero: function fillZero(num, width) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';

    num = _type2.default.toStr(num);
    var len = num.length;
    if (len >= width) return num;else {
      if (direction === 'right') return '' + num + '0'.repeat(width - len);else return '' + '0'.repeat(width - len) + num;
    }
  }
};

module.exports = xdMath;

/***/ })

/******/ });
});
//# sourceMappingURL=math.js.map