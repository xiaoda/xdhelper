/**
 * 字符串模块
 *
 * @flow
 */

const xdType = require('./type')

const xdString = {

  isStrEmpty (str: string): boolean {
    return !str.length
  },

  capitalize (str: string): string {
    return str.replace(/\b[a-z]/g, (s: string): string => s.toUpperCase())
  },

  camelCase (strs: array): string {
    return strs.map((str: string, index: number): string => index ? this.capitalize(str) : str).join('')
  },

  capitalCamelCase (strs: array): string {
    return strs.map((str: string): string => this.capitalize(str)).join('')
  },

  kebabCase (strs: array): string {
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
  }

}

module.exports = xdString
