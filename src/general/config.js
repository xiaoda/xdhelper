/**
 * 配置文件
 *
 * @flow
 */

const ENV = process.env.NODE_ENV
const ENV_DEV = 'dev'
const ENV_PROD = 'prod'

const config = {

  isDev (): boolean {
    return ENV === ENV_DEV
  },

  isProd (): boolean {
    return ENV === ENV_PROD
  },

}

module.exports = config
