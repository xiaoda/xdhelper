# xdhelper

[![Version](https://img.shields.io/npm/v/xdhelper.svg)](https://www.npmjs.com/package/xdhelper)
[![Download](https://img.shields.io/npm/dm/xdhelper.svg)](https://www.npmjs.com/package/xdhelper)
[![Build Status](https://travis-ci.org/xiaoda/xdhelper.svg?branch=master)](https://travis-ci.org/xiaoda/xdhelper)

xdhelper 是一个 JS 帮助方法库，提供常用方法使写 JS 更加简单。2018.4 重构完成 v2 版本，完善了 v1 的不少问题，并将用于正式产品中。API 文档请移步 [xdhelper wiki](https://github.com/xiaoda/xdhelper/wiki)

## Install

### with npm

```
npm install xdhelper
```

``` js
import xd from 'xdhelper'
```

### with script

``` html
<script src="xdhelper.js"></script>
```

``` js
xd.capitalize('hello world') // Hello World
```

## 命名规范

大部分方法采用“动词 [+ 名词 [+ 属性 / 形容词]]”的命名方式，方便依靠直觉快速搜索到需要的方法；为减少记忆负担，方法名中出现的名词一般都是单数形式。

## 伪链式操作

支持 xdhelper 方法和自定义函数

``` js
xd.chain('test', 'funcA', ['funcB', 'param'], customFuncA, [customFuncB, 'param'])
```
