/**
 * 设备类型模块
 *
 * @flow
 */

import XdModule from './'

let xdDevice = new XdModule({

  getUserAgent (): string {
    return window.navigator.userAgent
  },

  isMobile (userAgent: string = this.getUserAgent()): boolean {
    return (this.isiOS(userAgent) || this.isAndroid(userAgent)) && !this.isPad(userAgent)
  },

  isPad (userAgent: string = this.getUserAgent()): boolean {
    return /pad/i.test(userAgent)
  },

  isAndroid (userAgent: string = this.getUserAgent()): boolean {
    return /Android/i.test(userAgent)
  },

  isiOS (userAgent: string = this.getUserAgent()): boolean {
    return this.isiPhone(userAgent) || this.isiPad(userAgent) || this.isiPod(userAgent)
  },

  isiPhone (userAgent: string = this.getUserAgent()): boolean {
    return /iPhone/.test(userAgent) && !/iPod/.test(userAgent)
  },

  isiPad (userAgent: string = this.getUserAgent()): boolean {
    return /iPad/.test(userAgent)
  },

  isiPod (userAgent: string = this.getUserAgent()): boolean {
    return /iPod/.test(userAgent)
  }

})

module.exports = xdDevice