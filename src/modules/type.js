import XdModule from './'

/**
 * 类型模块
 */

const xdType = new XdModule({

  /* 通用类型判断 */
  getType (obj) {
    if (Number.isNaN(obj)) return 'NaN'
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'Infinity'
    if (obj === null) return String(obj)
    else if (typeof obj !== 'object') return typeof obj
    else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1]
  },

  /* 类型判断 */
  isStr (obj) {
    return this.getType(obj) === 'string'
  },

  isNum (obj) {
    return this.getType(obj) === 'number'
  },

  isArr (obj) {
    return this.getType(obj) === 'array'
  },

  isObj (obj) {
    return this.getType(obj) === 'object'
  },

  isFunc (obj) {
    return this.getType(obj) === 'function'
  },

  /* 类型转换 */
  toNum (obj) {
    return Number(obj)
  },

  toStr (obj) {
    return obj.toString()
  }

})

module.exports = xdType
