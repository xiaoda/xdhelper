/**
 * 对象模块
 *
 * @flow
 */

import XdModule from './'

let xdObject = new XdModule({

  isObjEmpty (obj: object): boolean {
    let keys = Object.keys(obj)
    return !keys.length
  },

  isObjEqual (objA: object, objB: object): boolean {
    return JSON.stringify(objA) === JSON.stringify(objB)
  },

  cloneObj (obj: object): string {
    return JSON.parse(JSON.stringify(obj))
  },

  loopObj (obj: object, callback: mixed): boolean {
    let keys = Object.keys(obj)
    keys.forEach((key: string) => {
      callback(obj[key], key)
    })
    return keys.length
  }

})

module.exports = xdObject
