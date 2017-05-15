import XdModule from './'

/**
 * 对象模块
 */

const xdObject = new XdModule({

  clone (obj) {
    return JSON.parse(JSON.stringify(obj))
  }

})

module.exports = xdObject
