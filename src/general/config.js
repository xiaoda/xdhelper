/**
 * 配置文件
 *
 * @flow
 */

const ENV = process.env.NODE_ENV
const DEV = 'dev'
const PROD = 'prod'

const config = {

  isDev (): boolean {
    return ENV === DEV
  },

  isProd (): boolean {
    return ENV === PROD
  },

}

module.exports = config
