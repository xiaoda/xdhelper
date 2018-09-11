/**
 * 类型模块
 *
 * @flow
 */

const xdType = {

  getType (obj: mixed): string {
    if (Number.isNaN(obj)) return 'nan'
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'infinity'
    if (obj === null) return String(obj)
    else if (typeof obj !== 'object') return typeof obj
    else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1]
  },

  isBool (obj: mixed): boolean {
    return this.getType(obj) === 'boolean'
  },

  isStr (obj: mixed): boolean {
    return this.getType(obj) === 'string'
  },

  isNum (obj: mixed): boolean {
    return this.getType(obj) === 'number'
  },

  isInfinity (obj: mixed): boolean {
    return this.getType(obj) === 'infinity'
  },

  isReg (obj: mixed): boolean {
    return this.getType(obj) === 'regexp'
  },

  isDate (obj: mixed): boolean {
    return this.getType(obj) === 'date'
  },

  isNull (obj: mixed): boolean {
    return this.getType(obj) === 'null'
  },

  isObj (obj: mixed): boolean {
    return this.getType(obj) === 'object'
  },

  isArr (obj: mixed): boolean {
    return this.getType(obj) === 'array'
  },

  isFunc (obj: mixed): boolean {
    return this.getType(obj) === 'function'
  },

  isDef (obj: mixed): boolean {
    return this.getType(obj) !== 'undefined'
  },

  isUndef (obj: mixed): boolean {
    return this.getType(obj) === 'undefined'
  },

  toBool (obj: mixed): boolean {
    return !!obj
  },

  toStr (obj: mixed): string {
    return String(obj)
  },

  toNum (obj: mixed): number {
    return Number(obj)
  },

  objToArr (obj: object): array {
    return Object.keys(obj).map((key: string): mixed => obj[key])
  }

}

module.exports = xdType
