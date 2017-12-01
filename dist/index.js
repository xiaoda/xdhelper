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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _type = __webpack_require__(0);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdArray = {
  getArrLen: function getArrLen(arr) {
    return arr.length;
  },
  isArrEmpty: function isArrEmpty(arr) {
    return !this.getArrLen(arr);
  },
  isArrEqual: function isArrEqual(arrA, arrB) {
    return JSON.stringify(arrA) === JSON.stringify(arrB);
  },
  cloneArr: function cloneArr(arr) {
    return JSON.parse(JSON.stringify(arr));
  },
  countArrItem: function countArrItem(arr, item) {
    return arr.filter(function (i) {
      return i === item;
    }).length;
  },
  addArrUniqItem: function addArrUniqItem(arr, item) {
    if (!arr.includes(item)) arr.push(item);
    return arr;
  },
  removeArrItem: function removeArrItem(arr, item) {
    if (arr.includes(item)) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },
  toggleArrItem: function toggleArrItem(arr, item) {
    var index = arr.indexOf(item);
    if (index === -1) arr.push(item);else arr.splice(index, 1);
    return arr;
  },
  sortArr: function sortArr(arr) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

    var targetArr = void 0;
    var isItemsAllNum = arr.every(function (item) {
      return _type2.default.isNum(item);
    });
    if (isItemsAllNum) targetArr = arr.sort(function (a, b) {
      return a - b;
    });else targetArr = arr.sort();
    if (order === 'desc') targetArr = targetArr.reverse();
    return targetArr;
  },
  sortArrBy: function sortArrBy(arr, field) {
    var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';

    var targetArr = arr.sort(function (itemA, itemB) {
      if (itemA[field] > itemB[field]) return 1;else if (itemA[field] < itemB[field]) return -1;else return 0;
    });
    if (order === 'desc') targetArr = targetArr.reverse();
    return targetArr;
  },
  getArrGreatestItem: function getArrGreatestItem(arr) {
    var sortedArr = this.sortArr(arr, 'desc');
    return sortedArr[0];
  },
  getArrLeastItem: function getArrLeastItem(arr) {
    var sortedArr = this.sortArr(arr);
    return sortedArr[0];
  },
  getArrGreatestItemBy: function getArrGreatestItemBy(arr, field) {
    var sortedArr = this.sortArrBy(arr, field, 'desc');
    return sortedArr[0];
  },
  getArrLeastItemBy: function getArrLeastItemBy(arr, field) {
    var sortedArr = this.sortArrBy(arr, field);
    return sortedArr[0];
  },
  getArrLastItem: function getArrLastItem(arr) {
    var arrLen = this.getArrLen(arr);
    return arr[arrLen - 1];
  },
  getArrSample: function getArrSample(arr) {
    var arrLen = this.getArrLen(arr);
    var randomIndex = Math.floor(Math.random() * arrLen);
    return arr[randomIndex];
  },
  shuffleArr: function shuffleArr(arr) {
    var copyArr = JSON.parse(JSON.stringify(arr));
    var targetArr = [];
    while (copyArr.length) {
      var randomIndex = Math.floor(Math.random() * copyArr.length);
      targetArr.push(copyArr[randomIndex]);
      copyArr.splice(randomIndex, 1);
    }
    return targetArr;
  },
  getArrRepeatedItems: function getArrRepeatedItems(arr, times) {
    var counter = {};
    arr.forEach(function (item) {
      var key = JSON.stringify(item);
      if (_type2.default.isUndefined(counter[key])) counter[key] = 1;else counter[key]++;
    });
    var targetArr = [];
    switch (_type2.default.getType(times)) {
      case 'number':
      case 'string':
        times = _type2.default.toNum(times);
        Object.keys(counter).forEach(function (key) {
          if (counter[key] === times) targetArr.push(JSON.parse(key));
        });
        break;
      case 'function':
        Object.keys(counter).forEach(function (key) {
          if (times(counter[key])) targetArr.push(JSON.parse(key));
        });
        break;
      default:
        Object.keys(counter).forEach(function (key) {
          targetArr.push(JSON.parse(key));
        });
    }
    return targetArr;
  },
  uniqArr: function uniqArr(arr) {
    return this.getArrRepeatedItems(arr);
  },
  unionArr: function unionArr() {
    var _this = this;

    var tmpArr = [];

    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    arr.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this.uniqArr(singleArr));
    });
    return this.getArrRepeatedItems(tmpArr);
  },
  intersectArr: function intersectArr() {
    var _this2 = this;

    var tmpArr = [];

    for (var _len2 = arguments.length, arr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    arr.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this2.uniqArr(singleArr));
    });
    return this.getArrRepeatedItems(tmpArr, arr.length);
  },
  complementArr: function complementArr() {
    var _this3 = this;

    var tmpArr = [];

    for (var _len3 = arguments.length, arr = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      arr[_key3] = arguments[_key3];
    }

    arr.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this3.uniqArr(singleArr));
    });
    return this.getArrRepeatedItems(tmpArr, 1);
  }
}; /**
    * 数组模块
    * 用作 Lodash / underscore 以外的补充
    *
    * 
    */

module.exports = xdArray;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 设备类型模块
 *
 * 
 */

var xdDevice = {
  getUserAgent: function getUserAgent() {
    return window.navigator.userAgent;
  },
  isMobile: function isMobile() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/mobile/i.test(userAgent)
    );
  },
  isPhone: function isPhone() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return this.isMobile(userAgent) && !this.isPad(userAgent);
  },
  isPad: function isPad() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/pad/i.test(userAgent)
    );
  },
  isAndroid: function isAndroid() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/Android/i.test(userAgent)
    );
  },
  isiOS: function isiOS() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return this.isiPhone(userAgent) || this.isiPad(userAgent) || this.isiPod(userAgent);
  },
  isiPhone: function isiPhone() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/iPhone/.test(userAgent) && !/iPod/.test(userAgent)
    );
  },
  isiPad: function isiPad() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/iPad/.test(userAgent)
    );
  },
  isiPod: function isiPod() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/iPod/.test(userAgent)
    );
  }
};

module.exports = xdDevice;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _type = __webpack_require__(0);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * 函数模块
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * 
                                                                                                                                                                                                     */

var xdFunction = {
  execFunc: function execFunc(func) {
    if (_type2.default.isFunc(func)) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return func.apply(undefined, _toConsumableArray(args));
    } else {
      return null;
    }
  }
};

module.exports = xdFunction;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _type = __webpack_require__(0);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdMask = {
  mobileMask: function mobileMask(mobile) {
    mobile = _type2.default.toStr(mobile);
    return '' + mobile.slice(0, 3) + '*'.repeat(4) + mobile.slice(-4);
  },
  emailMask: function emailMask(email) {
    var emailArray = email.split('@');
    if (emailArray[0].length > 4) email = emailArray[0].slice(0, -4) + '****@' + emailArray[1];else email = '' + emailArray[0].charAt(0) + '*'.repeat(emailArray[0].length - 1) + '@' + emailArray[1];
    return email;
  },
  idNumMask: function idNumMask(id) {
    id = _type2.default.toStr(id);
    var start = 3;
    var end = -4;
    var reduce = 7;
    if (id.length <= 4) {
      return '' + id.slice(0, 1) + '*'.repeat(id.length - 1);
    } else {
      if (id.length > 4 && id.length <= 8) {
        start = 1;
        end = -2;
        reduce = 3;
      }
      return '' + id.slice(0, start) + '*'.repeat(id.length - reduce) + id.slice(end);
    }
  }
}; /**
    * 格式模块
    *
    * 
    */

module.exports = xdMask;

/***/ }),
/* 5 */
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
  map: function map(num, rangeA, rangeB) {
    var startA = _type2.default.toNum(rangeA[0]);
    var endA = _type2.default.toNum(rangeA[1]);
    var startB = _type2.default.toNum(rangeB[0]);
    var endB = _type2.default.toNum(rangeB[1]);
    num = _type2.default.toNum(num);
    return startB + Math.abs(num - startA) / Math.abs(endA - startA) * Math.abs(endB - startB) * (endB >= startB ? 1 : -1);
  },
  random: function random(start, end) {
    var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    var random = this.map(Math.random(), [0, 1], [_type2.default.toNum(start), _type2.default.toNum(end)]);
    return decimal === -1 ? random : random.toFixed(decimal);
  },
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _type = __webpack_require__(0);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdObject = {
  getObjLen: function getObjLen(obj) {
    return Object.keys(obj).length;
  },
  hasObjKey: function hasObjKey(obj, key) {
    return !_type2.default.isUndefined(obj[key]);
  },
  isObjEmpty: function isObjEmpty(obj) {
    return !this.getObjLen(obj);
  },
  isObjEqual: function isObjEqual(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  },
  cloneObj: function cloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  forEachObj: function forEachObj(obj, callback) {
    var keys = Object.keys(obj);
    keys.forEach(function (key) {
      callback(obj[key], key);
    });
    return keys.length;
  }
}; /**
    * 对象模块
    *
    * 
    */

module.exports = xdObject;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 字符串模块
 *
 * 
 */

var xdString = {
  getStrLen: function getStrLen(str) {
    return str.length;
  },
  capitalize: function capitalize(str) {
    return str.replace(/\b[a-z]/g, function (s) {
      return s.toUpperCase();
    });
  },
  kebabCase: function kebabCase(strs) {
    return strs.map(function (str) {
      return str;
    }).join('-');
  },
  camelCase: function camelCase(strs) {
    var _this = this;

    return strs.map(function (str, index) {
      return index ? _this.capitalize(str) : str;
    }).join('');
  },
  capitalCamelCase: function capitalCamelCase(strs) {
    var _this2 = this;

    return strs.map(function (str) {
      return _this2.capitalize(str);
    }).join('');
  }
};

module.exports = xdString;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _type = __webpack_require__(0);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdSupport = {
  sseSupport: function sseSupport() {
    return !_type2.default.isUndefined(window.EventSource);
  }
}; /**
    * 支持模块
    *
    * 
    */

module.exports = xdSupport;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * url模块
 *
 * 
 */

var xdUrl = {
  buildQueryStr: function buildQueryStr(data) {
    var queries = [];
    Object.keys(data).forEach(function (key, index) {
      queries.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    });
    return queries.join('&');
  },
  getQueryParams: function getQueryParams() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

    var urlArray = void 0;
    var resultObj = {};
    if (!url) urlArray = [];else if (url.charAt(0) === '?') urlArray = url.slice(1).split('&');else urlArray = url.split('&');
    urlArray.forEach(function (item, key) {
      var array = item.split('=');
      resultObj[array[0]] = array[1];
    });
    return resultObj;
  }
};

module.exports = xdUrl;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * 入口文件
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                                   */

var _array = __webpack_require__(1);

var _array2 = _interopRequireDefault(_array);

var _device = __webpack_require__(2);

var _device2 = _interopRequireDefault(_device);

var _function = __webpack_require__(3);

var _function2 = _interopRequireDefault(_function);

var _mask = __webpack_require__(4);

var _mask2 = _interopRequireDefault(_mask);

var _math = __webpack_require__(5);

var _math2 = _interopRequireDefault(_math);

var _object = __webpack_require__(6);

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(7);

var _string2 = _interopRequireDefault(_string);

var _support = __webpack_require__(8);

var _support2 = _interopRequireDefault(_support);

var _type = __webpack_require__(0);

var _type2 = _interopRequireDefault(_type);

var _url = __webpack_require__(9);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var xd = _extends({}, _array2.default, _device2.default, _function2.default, _mask2.default, _math2.default, _object2.default, _string2.default, _support2.default, _type2.default, _url2.default);

var xdOverview = {
  chain: function chain() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length < 2) return args[0];
    var major = args.shift();
    args.forEach(function (ring) {
      var func = void 0;
      var params = void 0;
      if (_type2.default.isArr(ring)) {
        func = ring.shift();
        params = [major].concat(_toConsumableArray(ring));
      } else {
        func = ring;
        params = [major];
      }
      if (xd[func] !== undefined) {
        func = xd[func].bind(xd);
      }
      major = func.apply(undefined, _toConsumableArray(params));
    });
    return major;
  }
};

xd = _extends({}, xd, xdOverview);

Object.freeze(xd);
Object.keys(xd).forEach(function (key) {
  Object.freeze(xd[key]);
});

module.exports = xd;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map