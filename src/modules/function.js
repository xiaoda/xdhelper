import XdModule from './'
import xdType from './type'

/**
 * 函数模块
 */

const xdFunc = new XdModule({

  safeExecFunc (func, ...args) {
    xdType.isFunc(func) && func(...args)
  },

})

module.exports = xdFunc
