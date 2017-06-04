# xdhelper [![Build Status](https://travis-ci.org/xiaoda/xdhelper.svg?branch=master)](https://travis-ci.org/xiaoda/xdhelper)
JS helper functions. Under development. Apis will change.

## modules

### array（数组）

[toggleArrItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L13) (array: array, item: mixed): array
> 数组切换元素

[addArrUniqItem](https://github.com/xiaoda/xdhelper/blob/master/src/modules/array.js#L20) (array: array, item: mixed): array
> 数组添加唯一元素

### device（设备）

[getUserAgent](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L11) (): string
> 获取用户代理信息

[isMobile](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L15) (userAgent: string = this.getUserAgent()): boolean
> 判断是否移动端（手机端）

[isPad](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L19) (userAgent: string = this.getUserAgent()): boolean
> 判断是否平板电脑

[isAndroid](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L23) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 Android 系统

[isiOS](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L27) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iOS 系统

[isiPhone](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L31) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPhone

[isiPad](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L35) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPad

[isiPod](https://github.com/xiaoda/xdhelper/blob/master/src/modules/device.js#L39) (userAgent: string = this.getUserAgent()): boolean
> 判断是否 iPod

### function（函数）

[safelyExecFunc](https://github.com/xiaoda/xdhelper/blob/master/src/modules/function.js#L12) (func: mixed, ...args: array): boolean
> 安全执行函数

### mask（模糊格式）

[mobileMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L12) (mobile: string | number): string
> 手机号模糊格式

[emailMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L17) (email: string): string
> 邮箱模糊格式

[idNumMask](https://github.com/xiaoda/xdhelper/blob/master/src/modules/mask.js#L24) (id: string | number): string
> 身份证号码模糊格式

### math（算术）

[multiply1k](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L15) (num: number | string, times: number | string = 1): number
> 乘以 1000

[devide1k](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L19) (num: number | string, times: number | string = 1): number
> 除以 1000

[multiply1024](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L23) (num: number | string, times: number | string = 1): number
> 乘以 1024

[devide1024](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L27) (num: number | string, times: number | string = 1): number
> 除以 1024

[fillZero](https://github.com/xiaoda/xdhelper/blob/master/src/modules/math.js#L32) (num: number | string, width: number, direction: string = 'left'): string
> 补零

### object（对象）

[clone](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L11) (obj: object): string
> 复制对象（非引用传值）

[isObjEqual](https://github.com/xiaoda/xdhelper/blob/master/src/modules/object.js#L15) (objA: object, objB: object): boolean
> 判断两个对象是否完全相等（包括属性顺序）

### support（支持）

[sseSupport](https://github.com/xiaoda/xdhelper/blob/master/src/modules/support.js#L11) (): boolean
> 判断浏览器是否支持服务器推送事件

### type（类型）

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
> 判断是否正则

[toNum](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L46) (obj: mixed): number
> 转换为数字类型

[toStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/type.js#L50) (obj: mixed): string
> 转换为字符串类型

### url（网址）

[buildQueryStr](https://github.com/xiaoda/xdhelper/blob/master/src/modules/url.js#L11) (data: object): string
> 构造 url 参数

[getQueryParams](https://github.com/xiaoda/xdhelper/blob/master/src/modules/url.js#L19) (url: string = window.location.search): object
> 获取 url 参数
