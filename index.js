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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
  getType: function getType(obj) {
    if (Number.isNaN(obj)) return 'NaN';
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'Infinity';
    if (obj === null) return String(obj);else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1];
  },
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
  isReg: function isReg(obj) {
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
  isUndef: function isUndef(obj) {
    return this.getType(obj) === 'undefined';
  },
  toStr: function toStr(obj) {
    return String(obj);
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


/**
 * 数组模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdArray = {
  isArrEmpty: function isArrEmpty(arr) {
    return !arr.length;
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
  addArrUniqItem: function addArrUniqItem(arr, items) {
    if (!xdType.isArr(items)) items = [items];

    items.forEach(function (item) {
      if (!arr.includes(item)) arr.push(item);
    });

    return arr;
  },
  removeArrItem: function removeArrItem(arr, items) {
    if (!xdType.isArr(items)) items = [items];

    items.forEach(function (item) {
      if (arr.includes(item)) arr.splice(arr.indexOf(item), 1);
    });

    return arr;
  },
  toggleArrItem: function toggleArrItem(arr, items) {
    if (!xdType.isArr(items)) items = [items];

    items.forEach(function (item) {
      if (arr.includes(item)) arr.splice(arr.indexOf(item), 1);else arr.push(item);
    });

    return arr;
  },
  getArrFirstItem: function getArrFirstItem(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var result = [];

    for (var i = 0; i < num; i++) {
      result.push(arr[i]);
    }

    return result.length === 1 ? result[0] : result;
  },
  getArrLastItem: function getArrLastItem(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var result = [];

    for (var i = arr.length - num; i < arr.length; i++) {
      result.push(arr[i]);
    }

    return result.length === 1 ? result[0] : result;
  },
  getArrGreatestItem: function getArrGreatestItem(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var sortedArr = this.sortArr(arr, 'desc');

    return this.getArrFirstItem(sortedArr, num);
  },
  getArrLeastItem: function getArrLeastItem(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var sortedArr = this.sortArr(arr);

    return this.getArrFirstItem(sortedArr, num);
  },
  getArrGreatestItemBy: function getArrGreatestItemBy(arr, field) {
    var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var sortedArr = this.sortArrBy(arr, field, 'desc');

    return this.getArrFirstItem(sortedArr, num);
  },
  getArrLeastItemBy: function getArrLeastItemBy(arr, field) {
    var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var sortedArr = this.sortArrBy(arr, field);

    return this.getArrFirstItem(sortedArr, num);
  },
  getArrRepeatedItem: function getArrRepeatedItem(arr, times) {
    var counter = {};

    arr.forEach(function (item) {
      var key = JSON.stringify(item);

      if (xdType.isUndef(counter[key])) counter[key] = 1;else counter[key]++;
    });

    var targetArr = [];

    switch (xdType.getType(times)) {
      case 'number':
      case 'string':
        times = xdType.toNum(times);
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
    return this.getArrRepeatedItem(arr);
  },
  unionArr: function unionArr() {
    var _this = this;

    var tmpArr = [];

    for (var _len = arguments.length, arrs = Array(_len), _key = 0; _key < _len; _key++) {
      arrs[_key] = arguments[_key];
    }

    arrs.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this.uniqArr(singleArr));
    });

    return this.getArrRepeatedItem(tmpArr);
  },
  intersectArr: function intersectArr() {
    var _this2 = this;

    var tmpArr = [];

    for (var _len2 = arguments.length, arrs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arrs[_key2] = arguments[_key2];
    }

    arrs.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this2.uniqArr(singleArr));
    });

    return this.getArrRepeatedItem(tmpArr, arrs.length);
  },
  sortArr: function sortArr(arr) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

    var targetArr = void 0;
    var isItemsAllNum = arr.every(function (item) {
      return xdType.isNum(item);
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
  shuffleArr: function shuffleArr(arr) {
    var indexArr = arr.map(function (item, key) {
      return key;
    });
    var targetArr = [];

    while (indexArr.length > 0) {
      var randomIndex = Math.floor(Math.random() * indexArr.length);

      targetArr.push(arr[indexArr[randomIndex]]);
      indexArr.splice(randomIndex, 1);
    }

    return targetArr;
  },
  getArrSample: function getArrSample(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.getArrFirstItem(this.shuffleArr(arr), num);
  }
};

module.exports = xdArray;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 对象模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdObject = {
  getObjLen: function getObjLen(obj) {
    return Object.keys(obj).length;
  },
  hasObjKey: function hasObjKey(obj, key) {
    return !xdType.isUndef(obj[key]);
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
    var index = 0;

    keys.forEach(function (key, index) {
      callback(obj[key], key, index);
      index++;
    });

    return keys.length;
  }
};

module.exports = xdObject;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 函数模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdFunction = {
  safelyRun: function safelyRun(func) {
    var result = null;

    if (xdType.isFunc(func)) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      result = func.apply(undefined, _toConsumableArray(args));
    }

    return result;
  }
};

module.exports = xdFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 算术模块
 *
 * 
 */

var xdType = __webpack_require__(0);
var xdArr = __webpack_require__(1);

var xdMath = {
  sum: function sum() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    return arr.reduce(function (result, num) {
      return result + xdType.toNum(num);
    });
  },
  product: function product() {
    for (var _len2 = arguments.length, arr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    return arr.reduce(function (result, num) {
      return result * xdType.toNum(num);
    });
  },
  mean: function mean() {
    for (var _len3 = arguments.length, arr = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      arr[_key3] = arguments[_key3];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    var sum = this.sum(arr);
    var count = arr.length;

    return sum / count;
  },
  medium: function medium() {
    for (var _len4 = arguments.length, arr = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      arr[_key4] = arguments[_key4];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    var sortedArr = xdArr.sortArr(arr);
    var result = void 0;

    if (sortedArr.length % 2) {
      result = sortedArr[(sortedArr.length - 1) / 2];
    } else {
      var mediumA = sortedArr[sortedArr.length / 2 - 1];
      var mediumB = sortedArr[sortedArr.length / 2];
      result = this.mean(mediumA, mediumB);
    }

    return result;
  },
  map: function map(num, rangeA, rangeB) {
    num = xdType.toNum(num);
    var startA = xdType.toNum(rangeA[0]);
    var endA = xdType.toNum(rangeA[1]);
    var startB = xdType.toNum(rangeB[0]);
    var endB = xdType.toNum(rangeB[1]);

    return startB + (num - startA) / (endA - startA) * (endB - startB);
  },
  random: function random(range) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var start = xdType.toNum(range[0]);
    var end = xdType.toNum(range[1]);
    var random = this.map(Math.random(), [0, 1], [start, end]);

    return decimal === -1 ? random : random.toFixed(decimal);
  }
};

module.exports = xdMath;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 字符串模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdString = {
  isStrEmpty: function isStrEmpty(str) {
    return !str.length;
  },
  capitalize: function capitalize(str) {
    return str.replace(/\b[a-z]/g, function (s) {
      return s.toUpperCase();
    });
  },
  capitalCamelCase: function capitalCamelCase(strs) {
    var _this = this;

    return strs.map(function (str) {
      return _this.capitalize(str);
    }).join('');
  },
  camelCase: function camelCase(strs) {
    var _this2 = this;

    return strs.map(function (str, index) {
      return index ? _this2.capitalize(str) : str;
    }).join('');
  },
  kebabCase: function kebabCase(strs) {
    return strs.join('-');
  },
  fillZero: function fillZero(num) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';

    var numText = xdType.toStr(num);
    var len = numText.length;
    var result = void 0;

    if (len >= width) {
      result = numText;
    } else {
      var zeros = '0'.repeat(width - len);

      if (direction === 'left') {
        result = '' + zeros + numText;
      } else {
        result = '' + numText + zeros;
      }
    }

    return result;
  }
};

module.exports = xdString;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * url模块
 *
 * 
 */

var xdObj = __webpack_require__(2);

var xdUrl = {
  buildQueryStr: function buildQueryStr(queryObj) {
    var queryArr = [];

    xdObj.forEachObj(queryObj, function (val, key) {
      queryArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    });

    return queryArr.length ? '?' + queryArr.join('&') : '';
  },
  getQueryParam: function getQueryParam() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

    var queryArr = void 0;
    var queryObj = {};

    if (!url) queryArr = [];else if (url.charAt(0) === '?') queryArr = url.slice(1).split('&');else queryArr = url.split('&');

    queryArr.forEach(function (item, key) {
      var arr = item.split('=');
      queryObj[arr[0]] = arr[1];
    });

    return queryObj;
  }
};

module.exports = xdUrl;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 入口文件
 *
 * 
 */

var xdArray = __webpack_require__(1);
var xdDevice = __webpack_require__(3);
var xdFunction = __webpack_require__(4);
var xdMath = __webpack_require__(5);
var xdObject = __webpack_require__(2);
var xdString = __webpack_require__(6);
var xdType = __webpack_require__(0);
var xdUrl = __webpack_require__(7);

var xd = _extends({}, xdArray, xdDevice, xdFunction, xdMath, xdObject, xdString, xdType, xdUrl);

var xdGlobal = {
  chain: function chain() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length <= 1) return args[0];

    var major = args.shift();

    args.forEach(function (ring) {
      var func = void 0;
      var params = void 0;

      if (xdType.isArr(ring)) {
        func = ring.shift();
        params = [major].concat(_toConsumableArray(ring));
      } else {
        func = ring;
        params = [major];
      }

      if (xdType.isFunc(xd[func])) {
        func = xd[func].bind(xd);
      }

      major = func.apply(undefined, _toConsumableArray(params));
    });

    return major;
  }
};

xd = _extends({}, xd, xdGlobal);

Object.freeze(xd);

xdObject.forEachObj(xd, function (item, key) {
  Object.freeze(xd[key]);
});

module.exports = xd;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map