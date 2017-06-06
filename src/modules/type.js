/**
 * 类型模块
 *
 * @flow
 */

import XdModule from './'

let xdType = new XdModule({

  /* 通用类型判断 */
  getType (obj: mixed): string {
    if (Number.isNaN(obj)) return 'NaN'
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'Infinity'
    if (obj === null) return String(obj)
    else if (typeof obj !== 'object') return typeof obj
    else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1]
  },

  /* 类型判断 */
  isStr (obj: mixed): boolean {
    return this.getType(obj) === 'string'
  },

  isNum (obj: mixed): boolean {
    return this.getType(obj) === 'number'
  },

  isArr (obj: mixed): boolean {
    return this.getType(obj) === 'array'
  },

  isObj (obj: mixed): boolean {
    return this.getType(obj) === 'object'
  },

  isFunc (obj: mixed): boolean {
    return this.getType(obj) === 'function'
  },

  isRegExp (obj: mixed): boolean {
    return this.getType(obj) === 'regexp'
  },

  isBoolean (obj: mixed): boolean {
    return this.getType(obj) === 'boolean'
  },

  isDate (obj: mixed): boolean {
    return this.getType(obj) === 'date'
  },

  isNull (obj: mixed): boolean {
    return this.getType(obj) === 'null'
  },

  isUndefined (obj: mixed): boolean {
    return this.getType(obj) === 'undefined'
  },

  /* 类型转换 */
  toNum (obj: mixed): number {
    return Number(obj)
  },

  toStr (obj: mixed): string {
    return obj.toString()
  }

})

module.exports = xdType
