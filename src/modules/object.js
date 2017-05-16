/**
 * 对象模块
 *
 * @flow
 */

import XdModule from './'

let xdObject = new XdModule({

  clone (obj: object): string {
    return JSON.parse(JSON.stringify(obj))
  },

  isObjEqual (objA: object, objB: object): boolean {
    return JSON.stringify(objA) === JSON.stringify(objB)
  }

})

module.exports = xdObject
