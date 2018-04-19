/**
 * 对象模块
 *
 * @flow
 */

const xdType = require('./type')

const xdObject = {

  getObjLen (obj: object): number {
    return Object.keys(obj).length
  },

  hasObjKey (obj: object, key: string): boolean {
    return !xdType.isUndef(obj[key])
  },

  isObjEmpty (obj: object): boolean {
    return !this.getObjLen(obj)
  },

  isObjEqual (objA: object, objB: object): boolean {
    return JSON.stringify(objA) === JSON.stringify(objB)
  },

  cloneObj (obj: object): object {
    return JSON.parse(JSON.stringify(obj))
  },

  forEachObj (obj: object, callback: mixed): boolean {
    let keys = Object.keys(obj)
    let index = 0

    keys.forEach((key: string, index: number) => {
      callback(obj[key], key, index)
      index++
    })

    return keys.length
  }

}

module.exports = xdObject
