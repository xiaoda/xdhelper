# xdhelper

[![Version](https://img.shields.io/npm/v/xdhelper.svg)](https://www.npmjs.com/package/xdhelper)
[![Download](https://img.shields.io/npm/dm/xdhelper.svg)](https://www.npmjs.com/package/xdhelper)
[![Build Status](https://travis-ci.org/xiaoda/xdhelper.svg?branch=master)](https://travis-ci.org/xiaoda/xdhelper)

这是一个精简的 JS 帮助方法库，大多数方法提取自实际的开发项目，新项目可直接引入使用而不需要再 copy paste 一份 helper 文件。与 underscore / lodash 等知名类库不同的是：xdhelper 专注于原生的 JS API 无法直接解决的操作和判断，并提供了一些日常开发中超级实用的方法。在复杂项目中建议与 underscore 或 lodash 搭配使用。xdhelper 仍在开发中，API 可能会改变。

Focus on operation & judgement, fundamental functions. Under development. Apis will change.

## install

### install with npm or cnpm

```
npm install xdhelper
```

``` js
// import whole xdhelper
import xd from 'xdhelper'

// or import part of it
import xdArray from 'xdhelper/modules/array'
```

### install with script

``` html
<script src="xdhelper.js"></script>
```

``` js
xd.capitalize('hello world')
// output: Hello World
```

## modules & functions

大部分方法采用了“动词 [+ 名词 [+ 属性/形容词]]”的命名方式，为的是在想用某个方法时可以依靠直觉快速地搜索到这个方法。

### overview - 全局

[chain](https://github.com/xiaoda/xdhelper/blob/master/src/index.js#L34) (...args: array): mixed
> 伪链式操作

``` js
// support xdhelper functions & custom functions with or without params
xd.chain('text', 'funcA', ['funcB', 'param'], customFuncA, [customFuncB, 'param'])
```

跟常规的链式操作方式相比，xdhelper 提供了一个函数而不是对象来完成链式操作的工作，好处是：

1. xdhelper 所有方法以纯函数的方式交付，更符合函数式编程的思想
2. 不需要在末尾调用额外的取值方法（如 _.value() 等）
3. 支持自定义函数

### array - 数组

[getArrLen](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L12) (arr: array): number
> 获取数组长度

[isArrEmpty](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L16) (arr: array): boolean
> 判断数组是否为空

[isArrEqual](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L20) (arrA: array, arrB: array): boolean
> 判断两个数组是否完全相等（包括元素顺序）

[cloneArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L24) (arr: array): array
> 复制数组（非引用传值）

[countArrItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L28) (arr: array, item: mixed): number
> 数组元素计数

[addArrUniqItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L32) (array: array, item: mixed): array
> 数组添加唯一元素

[removeArrItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L37) (array: array, item: mixed): array
> 数组删除元素

[toggleArrItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L44) (array: array, item: mixed): array
> 数组切换元素

[sortArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L51) (arr: array, order: string = 'asc'): array
> 数组排序（字符串类型根据 unicode 码点排序，数字类型根据数字大小排序）

[sortArrBy](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L60) (arr: array, field: string, order: string = 'asc'): array
> 数组排序（根据字段值排序）

[getArrGreatestItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L70) (arr: array): mixed
> 获取数组中最大元素

[getArrLeastItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L75) (arr: array): mixed
> 获取数组中最小元素

[getArrGreatestItemBy](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L80) (arr: array): mixed
> 获取数组中最大元素（根据字段值排序）

[getArrLeastItemBy](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L85) (arr: array): mixed
> 获取数组中最小元素（根据字段值排序）

[getArrLastItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L90) (arr: array): mixed
> 获取数组中最后一个元素

[getArrSample](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L95) (arr: array): mixed
> 随机获取一个数组样本

[shuffleArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L101) (arr: array): array
> 数组顺序随机化

[getArrRepeatedItems](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L112) (arr: array, times: mixed): array
> 获取数组重复元素

[uniqArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L141) (arr: array): array
> 数组元素去重

[unionArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L145) (arrA: array, arrB: array): array
> 获取数组并集

[intersectArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L153) (arrA: array, arrB: array): array
> 获取数组交集

[complementArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L161) (arrA: array, arrB: array): array
> 获取数组差集（补集）

### device - 设备

[getUserAgent](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L10) (): string
> 获取用户代理信息

[isMobile](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L14) (userAgent: string = this.getUserAgent()): boolean
> 判断是否移动设备

[isPhone](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L18) (userAgent: string = this.getUserAgent()): boolean
> 判断是否手机

[isPad](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L22) (userAgent: string = this.getUserAgent()): boolean
> 判断是否平板电脑

[isAndroid](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L26) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 Android 系统

[isiOS](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L30) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iOS 系统

[isiPhone](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L34) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPhone

[isiPad](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L38) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPad

[isiPod](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L42) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPod

### function - 函数

[execFunc](https://github.com/xiaoda/xdhelper/blob/master/src/modules/function.js#L11) (func: mixed, ...args: array): boolean
> 安全执行函数

### mask - 模糊格式

[mobileMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L11) (mobile: string | number): string
> 手机号模糊格式

[emailMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L16) (email: string): string
> 邮箱模糊格式

[idNumMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L23) (id: string | number): string
> 身份证号码模糊格式

### math - 算术

[sum](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L14) (...arr: mixed): number
> 求和

[mean](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L19) (...arr: mixed): number
> 求平均数

[multiply](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L26) (numA: number | string, numB: number | string, times: number | string = 1): number
> 乘法

[multiply1k](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L30) (num: number | string, times: number | string = 1): number
> 乘以 1000

[multiply1024](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L34) (num: number | string, times: number | string = 1): number
> 乘以 1024

[devide](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L38) (numA: number | string, numB: number | string, times: number | string = 1): number
> 除法

[devide1k](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L42) (num: number | string, times: number | string = 1): number
> 除以 1000

[devide1024](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L46) (num: number | string, times: number | string = 1): number
> 除以 1024

[map](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L50) (num: number | string, rangeA: array, rangeB: array): number
> 数值映射

[random](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L59) (start: number | string, end: number | string, decimal: number = -1): number
> 获取随机数

[fillZero](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L64) (num: number | string, width: number, direction: string = 'left'): string
> 补零

### object - 对象

[getObjLen](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L11) (obj: object): number
> 获取对象长度

[hasObjKey](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L15) (obj: object, key: string): boolean
> 判断对象是否有指定字段

[isObjEmpty](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L19) (obj: object): boolean
> 判断对象是否为空

[isObjEqual](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L23) (objA: object, objB: object): boolean
> 判断两个对象是否完全相等（包括属性顺序）

[cloneObj](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L27) (obj: object): string
> 复制对象（非引用传值）

[forEachObj](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L31) (obj: object, callback: mixed): boolean
> 遍历对象，获得类似数组的 forEach 体验

### string - 字符串

[capitalize](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L10) (str: string): string
> 首字母大写

[kebabCase](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L14) (strs: array): string
> 中划线连接

[camelCase](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L18) (strs: array): string
> 驼峰连接

[capitalCamelCase](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L22) (strs: array): string
> 驼峰连接（首字母大写）

### support - 支持

[sseSupport](https://github.com/xiaoda/xdhelper/blob/master/src/modules/support.js#L11) (): boolean
> 判断浏览器是否支持服务器推送事件

### type - 类型

[getType](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L11) (obj: mixed): string
> 获取类型

[isStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L20) (obj: mixed): boolean
> 判断是否字符串

[isNum](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L24) (obj: mixed): boolean
> 判断是否数字

[isArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L28) (obj: mixed): boolean
> 判断是否数组

[isObj](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L32) (obj: mixed): boolean
> 判断是否对象

[isFunc](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L36) (obj: mixed): boolean
> 判断是否函数

[isRegExp](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L40) (obj: mixed): boolean
> 判断是否正则表达式

[isBool](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L44) (obj: mixed): boolean
> 判断是否布尔型

[isDate](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L48) (obj: mixed): boolean
> 判断是否日期

[isNull](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L52) (obj: mixed): boolean
> 判断是否 null

[isUndefined](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L56) (obj: mixed): boolean
> 判断是否 undefined

[toStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L61) (obj: mixed): string
> 转换为字符串类型

[toNum](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L65) (obj: mixed): number
> 转换为数字类型

[toBool](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L69) (obj: mixed): boolean
> 转换为布尔型

[objToArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L73) (obj: object): array
> 对象转换为数组

### url - 网址

[buildQueryStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/url.js#L10) (data: object): string
> 构造 url 参数

[getQueryParams](https://github.com/xiaoda/xdhelper/blob/master/src/modules/url.js#L18) (url: string = window.location.search): object
> 获取 url 参数
