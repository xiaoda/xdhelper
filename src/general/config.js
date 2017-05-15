const ENV = process.env.NODE_ENV
const DEVELOP = 'develop'
const PRODUCTION = 'production'
const SHOW_TRACE = true
const SHOW_ERROR = true

const config = {

  isDevelop () {
    return ENV === DEVELOP
  },

  isNotDevelop () {
    return ENV !== DEVELOP
  },

  showTrace () {
    return this.isDevelop() && !!SHOW_TRACE
  },

  showErr () {
    return this.isDevelop() && !!SHOW_ERROR
  },

}

module.exports = config
