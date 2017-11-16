/**
 * 函数模块
 *
 * @flow
 */

import xdType from './type'

let xdFunction = {

  execFunc (func: mixed, ...args: array): boolean {
    if (xdType.isFunc(func)) {
      return func(...args)
    } else {
      return null
    }
  }

}

module.exports = xdFunction
