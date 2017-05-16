/**
 * 对象模块
 * @flow
 */

import XdModule from './'

const xdObject = new XdModule({

  clone (obj: object): string {
    return JSON.parse(JSON.stringify(obj))
  }

})

module.exports = xdObject
