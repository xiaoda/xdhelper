/**
 * 对象模块
 *
 * @flow
 */

import XdModule from './'
import xdType from './type'

let xdObject = new XdModule({

  getObjLen (obj: object): number {
    return Object.keys(obj).length
  },

  hasObjKey (obj: object, key: string): boolean {
    return !xdType.isUndefined(obj[key])
  },

  isObjEmpty (obj: object): boolean {
    return !this.getObjLen(obj)
  },

  isObjEqual (objA: object, objB: object): boolean {
    return JSON.stringify(objA) === JSON.stringify(objB)
  },

  cloneObj (obj: object): string {
    return JSON.parse(JSON.stringify(obj))
  },

  forEachObj (obj: object, callback: mixed): boolean {
    let keys = Object.keys(obj)
    keys.forEach((key: string) => {
      callback(obj[key], key)
    })
    return keys.length
  }

})

module.exports = xdObject
