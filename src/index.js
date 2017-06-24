/**
 * 入口文件
 *
 * @flow
 */

import XdModule from './modules'
import xdArray from './modules/array'
import xdDevice from './modules/device'
import xdFunction from './modules/function'
import xdMask from './modules/mask'
import xdMath from './modules/math'
import xdObject from './modules/object'
import xdString from './modules/string'
import xdSupport from './modules/support'
import xdType from './modules/type'
import xdUrl from './modules/url'

let xdOverview = new XdModule({

  chain (...args: array): mixed {
    if (args.length < 2) return null
    let superStar = args.shift()
    args.forEach((ring: mixed): mixed => {
      if (xdType.isArr(ring)) {
        superStar = xd[ring.shift()](superStar, ...ring)
      } else if (xdType.isStr(ring)) {
        superStar = xd[ring](superStar)
      }
    })
    return superStar
  }

})

let xd = {
  ...xdArray,
  ...xdDevice,
  ...xdFunction,
  ...xdMask,
  ...xdMath,
  ...xdObject,
  ...xdString,
  ...xdSupport,
  ...xdType,
  ...xdUrl,
  ...xdOverview
}

Object.freeze(xd)

module.exports = xd
