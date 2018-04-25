/**
 * 链式操作模块
 *
 * @flow
 */

const xdType = require('./type')

const xdChain = {
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

      if (xdType.isFunc(this[func])) {
        func = this[func].bind(this)
      }

      major = func(...params)
    })

    return major
  }
}

module.exports = xdChain
