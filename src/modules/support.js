import XdModule from './'

/**
 * 支持模块
 */

const xdSupport = new XdModule({

  sseSupport () {
    return window.EventSource !== undefined
  }

})

module.exports = xdSupport
