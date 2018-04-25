/**
 * 入口文件
 *
 * @flow
 */

const xdArray = require('./modules/array')
const xdChain = require('./modules/chain')
const xdDevice = require('./modules/device')
const xdFunction = require('./modules/function')
const xdMath = require('./modules/math')
const xdObject = require('./modules/object')
const xdString = require('./modules/string')
const xdType = require('./modules/type')
const xdUrl = require('./modules/url')

const xd = {
  ...xdArray,
  ...xdChain,
  ...xdDevice,
  ...xdFunction,
  ...xdMath,
  ...xdObject,
  ...xdString,
  ...xdType,
  ...xdUrl
}

Object.freeze(xd)
module.exports = xd
