/**
 * @flow
 * 配置文件
 */

const ENV = process.env.NODE_ENV
const DEVELOP = 'develop'
const PRODUCTION = 'production'
const SHOW_TRACE = true
const SHOW_ERROR = true

const config = {

  isDevelop (): boolean {
    return ENV === DEVELOP
  },

  isNotDevelop (): boolean {
    return ENV !== DEVELOP
  },

  showTrace (): boolean {
    return this.isDevelop() && !!SHOW_TRACE
  },

  showErr (): boolean {
    return this.isDevelop() && !!SHOW_ERROR
  }

}

module.exports = config
