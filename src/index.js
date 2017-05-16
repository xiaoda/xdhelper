/**
 * 入口文件
 *
 * @flow
 */

import xdArray from './modules/array'
import xdDevice from './modules/device'
import xdFunction from './modules/function'
import xdMask from './modules/mask'
import xdMath from './modules/math'
import xdSupport from './modules/support'
import xdType from './modules/type'
import xdUrl from './modules/url'

let xd = {
  ...xdArray,
  ...xdDevice,
  ...xdFunction,
  ...xdMask,
  ...xdMath,
  ...xdSupport,
  ...xdType,
  ...xdUrl
}

Object.freeze(xd)

module.exports = xd
