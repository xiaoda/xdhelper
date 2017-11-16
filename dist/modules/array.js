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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/* 1 */,
/* 2 */
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=array.js.map