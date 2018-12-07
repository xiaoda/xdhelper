/**
 * 字符串模块
 *
 * @flow
 */

const xdType = require('./type')

const xdString = {

  _preProcessStringModulesParams (...args: mixed): object {
    let strs = []
    let force = false

    if (xdType.isArr(args[0])) {
      strs = args[0]
      if (xdType.isDef(args[1])) force = args[1]
    } else {
      if (xdType.isBool(args[args.length - 1])) {
        force = args[args.length - 1]
        args.pop()
      }
      strs = args
    }

    return {strs, force}
  },

  isStrEmpty (str: string): boolean {
    return !str.length
  },

  capitalize (str: string, force: boolean = false): string {
    if (force) str = str.toLowerCase()
    return str.replace(/\b[a-z]/g, (s: string): string => s.toUpperCase())
  },

  camelCase (...args: mixed): string {
    let {strs, force} = this._preProcessStringModulesParams(...args)

    return strs.map((str: string, index: number): string => {
      if (force) str = str.toLowerCase()
      return index ? this.capitalize(str) : str
    }).join('')
  },

  capitalCamelCase (...args: mixed): string {
    let {strs, force} = this._preProcessStringModulesParams(...args)

    return strs.map((str: string): string => {
      if (force) str = str.toLowerCase()
      return this.capitalize(str)
    }).join('')
  },

  kebabCase (...args: mixed): string {
    let {strs, force} = this._preProcessStringModulesParams(...args)

    if (force) strs = strs.map((str: string): string => str.toLowerCase())
    return strs.join('-')
  },

  fillZero (num: number | string, width: number = 2, direction: string = 'left'): string {
    let numText = xdType.toStr(num)
    let result

    switch (direction) {
      case 'left':
        result = numText.padStart(width, '0')
        break

      case 'right':
        result = numText.padEnd(width, '0')
        break
    }

    return result
  },

  generateUniqId (prefix: string = ''): string {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}`
  }

}

module.exports = xdString
