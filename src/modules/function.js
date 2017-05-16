/**
 * 函数模块
 * @flow
 */

import XdModule from './'
import xdType from './type'

const xdFunc = new XdModule({

  safeExecFunc (func: string, ...args: array): boolean {
    if (xdType.isFunc(func)) {
      func(...args)
      return true
    } else {
      return false
    }
  }

})

module.exports = xdFunc
