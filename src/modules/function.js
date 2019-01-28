/**
 * 函数模块
 *
 * @flow
 */

const xdType = require('./type')

let xdFunction = {

  safelyRun (func: mixed, ...args: array): boolean {
    let result = null

    if (xdType.isFunc(func)) {
      result = func(...args)
    }

    return result
  },

  sleep (ms: number): promise {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

}

module.exports = xdFunction
