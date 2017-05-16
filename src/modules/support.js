/**
 * 支持模块
 *
 * @flow
 */

import XdModule from './'

let xdSupport = new XdModule({

  sseSupport (): boolean {
    return window.EventSource !== undefined
  }

})

module.exports = xdSupport
