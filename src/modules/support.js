/**
 * 支持模块
 *
 * @flow
 */

import xdType from './type'

let xdSupport = {

  sseSupport (): boolean {
    return !xdType.isUndefined(window.EventSource)
  }

}

module.exports = xdSupport
