# xdhelper

[![Version](https://img.shields.io/npm/v/xdhelper.svg)](https://www.npmjs.com/package/xdhelper)
[![Download](https://img.shields.io/npm/dm/xdhelper.svg)](https://www.npmjs.com/package/xdhelper)
[![Build Status](https://travis-ci.org/xiaoda/xdhelper.svg?branch=master)](https://travis-ci.org/xiaoda/xdhelper)

xdhelper 是一个 JS 帮助函数库，使 JS 的常规操作更加简单。2018.4 重构并发布 v2 版本，完善了 v1 版本的问题。

## Install

```
npm install xdhelper
```

or

``` html
<script src="xdhelper.js"></script>
```

## Naming Spec

大部分函数采用“动词 [+ 名词 [+ 属性 / 形容词]]”的命名方式，方便依靠直觉快速搜索到需要的函数；为减少记忆负担，函数名中出现的名词都是单数形式。

## API Doc

### [Array 数组模块](https://github.com/xiaoda/xdhelper/wiki/Array-%E6%95%B0%E7%BB%84%E6%A8%A1%E5%9D%97)
* isArrEmpty
* isArrEqual
* cloneArr
* countArrItem
* addArrUniqItem
* removeArrItem
* toggleArrItem
* getArrFisrtItem
* getArrLastItem
* getArrGreatestItem
* getArrLeastItem
* getArrGreatestItemBy
* getArrLeastItemBy
* getArrRepeatedItem
* uniqArr
* unionArr
* intersectArr
* sortArr
* sortArrBy
* shuffleArr
* getArrSample

## [Chain 链式操作模块](https://github.com/xiaoda/xdhelper/wiki/Chain-%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C%E6%A8%A1%E5%9D%97)
* chain

### [Device 设备类型模块](https://github.com/xiaoda/xdhelper/wiki/Device-%E8%AE%BE%E5%A4%87%E7%B1%BB%E5%9E%8B%E6%A8%A1%E5%9D%97)
* getUserAgent
* isMobile
* isPhone
* isPad
* isAndroid
* isiOS
* isiPhone
* isiPad
* isiPod

### [Function 函数模块](https://github.com/xiaoda/xdhelper/wiki/Function-%E5%87%BD%E6%95%B0%E6%A8%A1%E5%9D%97)
* safelyRun

### [Math 算术模块](https://github.com/xiaoda/xdhelper/wiki/Math-%E7%AE%97%E6%9C%AF%E6%A8%A1%E5%9D%97)
* getSum
* getProduct
* getMean
* getMedium
* getRandom
* mapRange

### [Object 对象模块](https://github.com/xiaoda/xdhelper/wiki/Object-%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9D%97)
* getObjLen
* hasObjKey
* isObjEmpty
* isObjEqual
* cloneObj
* forEachObj
* mapObj

### [String 字符串模块](https://github.com/xiaoda/xdhelper/wiki/String-%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A8%A1%E5%9D%97)
* isStrEmpty
* capitalize
* camelCase
* capitalCamelCase
* kebabCase
* fillZero
* generateUniqId

### [Type 类型模块](https://github.com/xiaoda/xdhelper/wiki/Type-%E7%B1%BB%E5%9E%8B%E6%A8%A1%E5%9D%97)
* getType
* isBool
* isStr
* isNum
* isInfinity
* isReg
* isDate
* isNull
* isObj
* isArr
* isFunc
* isDef
* isUndef
* toBool
* toStr
* toNum
* objToArr

### [Url 网址模块](https://github.com/xiaoda/xdhelper/wiki/Url--%E7%BD%91%E5%9D%80%E6%A8%A1%E5%9D%97)
* buildQueryStr
* getQueryParam
