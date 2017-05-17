/**
 * 函数模块
 *
 * @flow
 */

import XdModule from './'
import xdType from './type'

let xdFunction = new XdModule({

  safelyExecFunc (func: mixed, ...args: array): boolean {
    if (xdType.isFunc(func)) {
      func(...args)
      return true
    } else {
      return false
    }
  }

})

module.exports = xdFunction
