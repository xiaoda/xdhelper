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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
    if (Number.isNaN(obj)) return 'nan';
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'infinity';
    if (obj === null) return String(obj);else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1];
  },
  isBool: function isBool(obj) {
    return this.getType(obj) === 'boolean';
  },
  isStr: function isStr(obj) {
    return this.getType(obj) === 'string';
  },
  isNum: function isNum(obj) {
    return this.getType(obj) === 'number';
  },
  isInfinity: function isInfinity(obj) {
    return this.getType(obj) === 'infinity';
  },
  isReg: function isReg(obj) {
    return this.getType(obj) === 'regexp';
  },
  isDate: function isDate(obj) {
    return this.getType(obj) === 'date';
  },
  isNull: function isNull(obj) {
    return this.getType(obj) === 'null';
  },
  isObj: function isObj(obj) {
    return this.getType(obj) === 'object';
  },
  isArr: function isArr(obj) {
    return this.getType(obj) === 'array';
  },
  isFunc: function isFunc(obj) {
    return this.getType(obj) === 'function';
  },
  isDef: function isDef(obj) {
    return this.getType(obj) !== 'undefined';
  },
  isUndef: function isUndef(obj) {
    return this.getType(obj) === 'undefined';
  },
  toBool: function toBool(obj) {
    return !!obj;
  },
  toStr: function toStr(obj) {
    return String(obj);
  },
  toNum: function toNum(obj) {
    return Number(obj);
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
    var counter = new Map();

    arr.forEach(function (item) {
      var key = item;
      var count = void 0;

      if (counter.has(key)) count = counter.get(key) + 1;else count = 1;
      counter.set(key, count);
    });

    var targetArr = [];

    switch (xdType.getType(times)) {
      case 'number':
      case 'string':
        times = xdType.toNum(times);
        counter.forEach(function (count, key) {
          if (count === times) targetArr.push(key);
        });
        break;

      case 'function':
        counter.forEach(function (count, key) {
          if (times(count)) targetArr.push(key);
        });
        break;

      default:
        counter.forEach(function (count, key) {
          targetArr.push(key);
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
    return xdType.isDef(obj[key]);
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
      callback(obj[key], key, obj);
    });

    return keys.length;
  },
  mapObj: function mapObj(obj, callback) {
    var keys = Object.keys(obj);

    return keys.map(function (key) {
      return callback(obj[key], key, obj);
    });
  }
};

module.exports = xdObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 链式操作模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdChain = {
  chain: function chain() {
    var _this = this;

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

      if (xdType.isFunc(_this[func])) {
        func = _this[func].bind(_this);
      }

      major = func.apply(undefined, _toConsumableArray(params));
    });

    return major;
  }
};

module.exports = xdChain;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 设备类型模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdDevice = {
  getUserAgent: function getUserAgent() {
    return xdType.isDef(window) ? window.navigator.userAgent : '';
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * 算术模块
 *
 * 
 */

var xdType = __webpack_require__(0);
var xdArr = __webpack_require__(1);

var xdMath = {
  getSum: function getSum() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    return arr.reduce(function (result, num) {
      return result + xdType.toNum(num);
    });
  },
  getProduct: function getProduct() {
    for (var _len2 = arguments.length, arr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    return arr.reduce(function (result, num) {
      return result * xdType.toNum(num);
    });
  },
  getMean: function getMean() {
    for (var _len3 = arguments.length, arr = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      arr[_key3] = arguments[_key3];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    var sum = this.getSum(arr);
    var count = arr.length;

    return sum / count;
  },
  getMedium: function getMedium() {
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
      result = this.getMean(mediumA, mediumB);
    }

    return result;
  },
  getRandom: function getRandom(range) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var random = this.map(Math.random(), [0, 1], range);

    return decimal === -1 ? random : random.toFixed(decimal);
  },
  mapRange: function mapRange(num, rangeA, rangeB) {
    num = xdType.toNum(num);

    var _rangeA$map = rangeA.map(xdType.toNum),
        _rangeA$map2 = _slicedToArray(_rangeA$map, 2),
        startA = _rangeA$map2[0],
        endA = _rangeA$map2[1];

    var _rangeB$map = rangeB.map(xdType.toNum),
        _rangeB$map2 = _slicedToArray(_rangeB$map, 2),
        startB = _rangeB$map2[0],
        endB = _rangeB$map2[1];

    return startB + (num - startA) / (endA - startA) * (endB - startB);
  }
};

module.exports = xdMath;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 字符串模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdString = {
  _preProcessStringModulesParams: function _preProcessStringModulesParams() {
    var strs = [];
    var force = false;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (xdType.isArr(args[0])) {
      strs = args[0];
      if (xdType.isDef(args[1])) force = args[1];
    } else {
      if (xdType.isBool(args[args.length - 1])) {
        force = args[args.length - 1];
        args.pop();
      }
      strs = args;
    }

    return { strs: strs, force: force };
  },
  isStrEmpty: function isStrEmpty(str) {
    return !str.length;
  },
  capitalize: function capitalize(str) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (force) str = str.toLowerCase();
    return str.replace(/\b[a-z]/g, function (s) {
      return s.toUpperCase();
    });
  },
  camelCase: function camelCase() {
    var _this = this;

    var _preProcessStringModu = this._preProcessStringModulesParams.apply(this, arguments),
        strs = _preProcessStringModu.strs,
        force = _preProcessStringModu.force;

    return strs.map(function (str, index) {
      if (force) str = str.toLowerCase();
      return index ? _this.capitalize(str) : str;
    }).join('');
  },
  capitalCamelCase: function capitalCamelCase() {
    var _this2 = this;

    var _preProcessStringModu2 = this._preProcessStringModulesParams.apply(this, arguments),
        strs = _preProcessStringModu2.strs,
        force = _preProcessStringModu2.force;

    return strs.map(function (str) {
      if (force) str = str.toLowerCase();
      return _this2.capitalize(str);
    }).join('');
  },
  kebabCase: function kebabCase() {
    var _preProcessStringModu3 = this._preProcessStringModulesParams.apply(this, arguments),
        strs = _preProcessStringModu3.strs,
        force = _preProcessStringModu3.force;

    if (force) strs = strs.map(function (str) {
      return str.toLowerCase();
    });
    return strs.join('-');
  },
  fillZero: function fillZero(num) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';

    var numText = xdType.toStr(num);
    var result = void 0;

    switch (direction) {
      case 'left':
        result = numText.padStart(width, '0');
        break;

      case 'right':
        result = numText.padEnd(width, '0');
        break;
    }

    return result;
  }
};

module.exports = xdString;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * url模块
 *
 * 
 */

var xdObj = __webpack_require__(2);
var xdType = __webpack_require__(0);

var xdUrl = {
  buildQueryStr: function buildQueryStr(queryObj) {
    var queryArr = [];

    xdObj.forEachObj(queryObj, function (val, key) {
      queryArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    });

    return queryArr.length ? '?' + queryArr.join('&') : '';
  },
  getQueryParam: function getQueryParam(url) {
    var queryArr = void 0;
    var queryObj = {};

    if (!url && xdType.isDef(window)) url = window.location.search;

    if (!url) queryArr = [];else if (url.startsWith('?')) queryArr = url.slice(1).split('&');else queryArr = url.split('&');

    queryArr.forEach(function (item) {
      var _item$split = item.split('='),
          _item$split2 = _slicedToArray(_item$split, 2),
          key = _item$split2[0],
          val = _item$split2[1];

      queryObj[key] = xdType.isNum(xdType.toNum(val)) ? xdType.toNum(val) : val;
    });

    return queryObj;
  }
};

module.exports = xdUrl;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 入口文件
 *
 * 
 */

var xdArray = __webpack_require__(1);
var xdChain = __webpack_require__(3);
var xdDevice = __webpack_require__(4);
var xdFunction = __webpack_require__(5);
var xdMath = __webpack_require__(6);
var xdObject = __webpack_require__(2);
var xdString = __webpack_require__(7);
var xdType = __webpack_require__(0);
var xdUrl = __webpack_require__(8);

var xd = _extends({}, xdArray, xdChain, xdDevice, xdFunction, xdMath, xdObject, xdString, xdType, xdUrl);

module.exports = xd;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map