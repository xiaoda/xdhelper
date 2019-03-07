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

  isStr (obj: mixed): boolean {
    return this.getType(obj) === 'string'
  },

  isNum (obj: mixed): boolean {
    return this.getType(obj) === 'number'
  },

  isReg (obj: mixed): boolean {
    return this.getType(obj) === 'regexp'
  },

  isDate (obj: mixed): boolean {
    return this.getType(obj) === 'date'
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

  isBool (obj: mixed): boolean {
    return obj === true || obj === false
  },

  isInfinity (obj: mixed): boolean {
    return obj === Infinity || obj === -Infinity
  },

  isNull (obj: mixed): boolean {
    return obj === null
  },

  isDef (obj: mixed): boolean {
    return obj !== undefined
  },

  isUndef (obj: mixed): boolean {
    return obj === undefined
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
