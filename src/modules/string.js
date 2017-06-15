/**
 * 字符串模块
 *
 * @flow
 */

import XdModule from './'

let xdString = new XdModule({

  getStrLen (str: string): number {
    return str.length
  },

  capitalize (str: string): string {
    return str.replace(/\b[a-z]/g, (s: string): string => s.toUpperCase())
  },

  kebabCase (strs: array): string {
    return strs.map((str: string): string => str).join('-')
  },

  camelCase (strs: array): string {
    return strs.map((str: string, index: number): string => index ? this.capitalize(str) : str).join('')
  },

  capitalCamelCase (strs: array): string {
    return strs.map((str: string): string => this.capitalize(str)).join('')
  }

})

module.exports = xdString
