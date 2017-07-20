/**
 * 支持模块
 *
 * @flow
 */

import XdModule from './'
import xdType from './type'

let xdSupport = new XdModule({

  sseSupport (): boolean {
    return !xdType.isUndefined(window.EventSource)
  }

})

module.exports = xdSupport
