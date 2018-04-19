/**
 * 入口文件
 *
 * @flow
 */

const xdArray = require('./modules/array')
const xdDevice = require('./modules/device')
const xdFunction = require('./modules/function')
const xdMath = require('./modules/math')
const xdObject = require('./modules/object')
const xdString = require('./modules/string')
const xdType = require('./modules/type')
const xdUrl = require('./modules/url')

let xd = {
  ...xdArray,
  ...xdDevice,
  ...xdFunction,
  ...xdMath,
  ...xdObject,
  ...xdString,
  ...xdType,
  ...xdUrl
}

let xdGlobal = {

  chain (...args: array): mixed {
    if (args.length <= 1) return args[0]

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

      if (xdType.isFunc(xd[func])) {
        func = xd[func].bind(xd)
      }

      major = func(...params)
    })

    return major
  }

}

xd = {
  ...xd,
  ...xdGlobal
}

Object.freeze(xd)

xdObject.forEachObj(xd, (item: mixed, key: string) => {
  Object.freeze(xd[key])
})

module.exports = xd
