/**
 * 配置文件
 *
 * @flow
 */

const ENV = process.env.NODE_ENV
const DEV = 'dev'
const PROD = 'prod'
const SHOW_TRACE = true
const SHOW_ERROR = true

let config = {

  isDev (): boolean {
    return ENV === DEV
  },

  isNotDev (): boolean {
    return ENV !== DEV
  },

  showTrace (): boolean {
    return this.isDev() && !!SHOW_TRACE
  },

  showErr (): boolean {
    return this.isDev() && !!SHOW_ERROR
  }

}

module.exports = config
