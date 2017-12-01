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
import xdObject from './modules/object'
import xdString from './modules/string'
import xdSupport from './modules/support'
import xdType from './modules/type'
import xdUrl from './modules/url'

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
  ...xdUrl
}

let xdOverview = {

  chain (...args: array): mixed {
    if (args.length < 2) return args[0]
    let major = args.shift()
    args.forEach((ring: mixed): mixed => {
      let func
      let params
      if (xdType.isArr(ring)) {
        func = ring.shift()
        params = [major, ...ring]
      } else {
        func = ring
        params = [major]
      }
      if (xd[func] !== undefined) {
        func = xd[func].bind(xd)
      }
      major = func(...params)
    })
    return major
  }

}

xd = {
  ...xd,
  ...xdOverview
}

Object.freeze(xd)
Object.keys(xd).forEach((key: string) => {
  Object.freeze(xd[key])
})

module.exports = xd
