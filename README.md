# xdhelper

[![Version](https://img.shields.io/npm/v/xdhelper.svg)](https://www.npmjs.com/package/xdhelper)
[![Download](https://img.shields.io/npm/dm/xdhelper.svg)](https://www.npmjs.com/package/xdhelper)
[![Build Status](https://travis-ci.org/xiaoda/xdhelper.svg?branch=master)](https://travis-ci.org/xiaoda/xdhelper)

这是一个精简的 JS 帮助方法库，大多数方法提取自实际的开发项目，新项目可直接引入使用而不需要再 copy paste 一份 helper 文件。与 underscore / lodash 等知名类库不同的是：xdhelper 专注于原生的 JS API 无法直接解决的操作和判断，并提供了一些日常开发中超级实用的方法。在复杂项目中建议与 underscore 或 lodash 搭配使用。xdhelper 仍在活跃开发中，API 可能会改变。

Focus on operation & judgement, fundamental functions. Under active development. Apis will change.

## install

install with npm or cnpm
```
npm install xdhelper
```

then import it
``` javascript
// import whole xdhelper
import xd from 'xdhelper'

// or import part of it
import xdArray from 'xdhelper/modules/array'
```

## modules & functions

### overview - 全局

[chain](https://github.com/xiaoda/xdhelper/blob/master/src/index.js#L21) (...args: array): mixed
> 伪链式操作

### array - 数组

[getArrLen](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L13) (arr: array): number
> 获取数组长度

[isArrEmpty](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L17) (arr: array): boolean
> 判断数组是否为空

[countArrItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L21) (arr: array, item: mixed): number
> 数组元素计数

[addArrUniqItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L25) (array: array, item: mixed): array
> 数组添加唯一元素

[removeArrItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L30) (array: array, item: mixed): array
> 数组删除元素

[toggleArrItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L37) (array: array, item: mixed): array
> 数组切换元素

[sortArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L44) (arr: array, order: string = 'asc'): array
> 数组排序

[sortArrBy](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L50) (arr: array, field: string, order: string = 'asc'): array
> 数组排序（根据字段值）

[getArrSample](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L60) (arr: array): mixed
> 随机获取一个数组样本

[shuffleArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L66) (arr: array): array
> 数组顺序随机化

[getArrRepeatedItems](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L77) (arr: array, times: mixed): array
> 获取数组重复元素

[uniqArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L106) (arr: array): array
> 数组元素去重

[unionArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L110) (arrA: array, arrB: array): array
> 获取数组并集

[intersectArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L118) (arrA: array, arrB: array): array
> 获取数组交集

[complementArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L126) (arrA: array, arrB: array): array
> 获取数组差集（补集）

### device - 设备

[getUserAgent](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L11) (): string
> 获取用户代理信息

[isMobile](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L15) (userAgent: string = this.getUserAgent()): boolean
> 判断是否移动设备

[isPhone](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L19) (userAgent: string = this.getUserAgent()): boolean
> 判断是否手机

[isPad](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L23) (userAgent: string = this.getUserAgent()): boolean
> 判断是否平板电脑

[isAndroid](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L27) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 Android 系统

[isiOS](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L31) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iOS 系统

[isiPhone](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L35) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPhone

[isiPad](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L39) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPad

[isiPod](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L43) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPod

### function - 函数

[execFunc](https://github.com/xiaoda/xdhelper/blob/master/src/modules/function.js#L12) (func: mixed, ...args: array): boolean
> 安全执行函数

### mask - 模糊格式

[mobileMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L12) (mobile: string | number): string
> 手机号模糊格式

[emailMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L17) (email: string): string
> 邮箱模糊格式

[idNumMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L24) (id: string | number): string
> 身份证号码模糊格式

### math - 算术

[sum](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L15) (...arr: mixed): number
> 求和

[mean](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L20) (...arr: mixed): number
> 求平均数

[multiply](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L27) (numA: number | string, numB: number | string, times: number | string = 1): number
> 乘法

[multiply1k](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L31) (num: number | string, times: number | string = 1): number
> 乘以 1000

[multiply1024](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L35) (num: number | string, times: number | string = 1): number
> 乘以 1024

[devide](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L39) (numA: number | string, numB: number | string, times: number | string = 1): number
> 除法

[devide1k](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L43) (num: number | string, times: number | string = 1): number
> 除以 1000

[devide1024](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L47) (num: number | string, times: number | string = 1): number
> 除以 1024

[fillZero](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L52) (num: number | string, width: number, direction: string = 'left'): string
> 补零

### object - 对象

[getObjLen](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L12) (obj: object): number
> 获取对象长度

[hasObjKey](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L16) (obj: object, key: string): boolean
> 判断对象是否有指定字段

[isObjEmpty](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L20) (obj: object): boolean
> 判断对象是否为空

[isObjEqual](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L24) (objA: object, objB: object): boolean
> 判断两个对象是否完全相等（包括属性顺序）

[cloneObj](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L28) (obj: object): string
> 复制对象（非引用传值）

[forEachObj](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L32) (obj: object, callback: mixed): boolean
> 遍历对象

### string - 字符串

[capitalize](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L11) (str: string): string
> 首字母大写

[kebabCase](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L15) (strs: array): string
> 中划线连接

[camelCase](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L19) (strs: array): string
> 驼峰连接

[capitalCamelCase](https://github.com/xiaoda/xdhelper/blob/master/src/modules/string.js#L23) (strs: array): string
> 驼峰连接（首字母大写）

### support - 支持

[sseSupport](https://github.com/xiaoda/xdhelper/blob/master/src/modules/support.js#L12) (): boolean
> 判断浏览器是否支持服务器推送事件

### type - 类型

[getType](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L12) (obj: mixed): string
> 获取类型

[isStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L21) (obj: mixed): boolean
> 判断是否字符串

[isNum](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L25) (obj: mixed): boolean
> 判断是否数字

[isArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L29) (obj: mixed): boolean
> 判断是否数组

[isObj](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L33) (obj: mixed): boolean
> 判断是否对象

[isFunc](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L37) (obj: mixed): boolean
> 判断是否函数

[isRegExp](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L41) (obj: mixed): boolean
> 判断是否正则表达式

[isBool](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L45) (obj: mixed): boolean
> 判断是否布尔型

[isDate](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L49) (obj: mixed): boolean
> 判断是否日期

[isNull](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L53) (obj: mixed): boolean
> 判断是否 null

[isUndefined](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L57) (obj: mixed): boolean
> 判断是否 undefined

[toStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L62) (obj: mixed): string
> 转换为字符串类型

[toNum](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L66) (obj: mixed): number
> 转换为数字类型

[toBool](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L70) (obj: mixed): boolean
> 转换为布尔型

[objToArr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L74) (obj: object): array
> 对象转换为数组

### url - 网址

[buildQueryStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/url.js#L11) (data: object): string
> 构造 url 参数

[getQueryParams](https://github.com/xiaoda/xdhelper/blob/master/src/modules/url.js#L19) (url: string = window.location.search): object
> 获取 url 参数
