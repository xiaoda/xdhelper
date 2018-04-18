/**
 * 类型模块
 *
 * @flow
 */

const xdType = {

  getType (obj: mixed): string {
    if (Number.isNaN(obj)) return 'NaN'
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'Infinity'
    if (obj === null) return String(obj)
    else if (typeof obj !== 'object') return typeof obj
    else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1]
  },

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

  isReg (obj: mixed): boolean {
    return this.getType(obj) === 'regexp'
  },

  isBool (obj: mixed): boolean {
    return this.getType(obj) === 'boolean'
  },

  isDate (obj: mixed): boolean {
    return this.getType(obj) === 'date'
  },

  isNull (obj: mixed): boolean {
    return this.getType(obj) === 'null'
  },

  isUndef (obj: mixed): boolean {
    return this.getType(obj) === 'undefined'
  },

  toStr (obj: mixed): string {
    return String(obj)
  },

  toNum (obj: mixed): number {
    return Number(obj)
  },

  toBool (obj: mixed): boolean {
    return !!obj
  },

  objToArr (obj: object): array {
    return Object.keys(obj).map((key: string): mixed => obj[key])
  }

}

module.exports = xdType
