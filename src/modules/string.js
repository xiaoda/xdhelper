/**
 * 字符串模块
 *
 * @flow
 */

import XdModule from './'

let xdString = new XdModule({

  capitalize (str: string): str {
    return str.toLowerCase().replace(/^a-z/, (s: string): string => s.toUpperCase())
  },

  camelCase (strs: array): str {
    return strs.map((str: string, index: number): string => index ? this.capitalize(str) : str).join('')
  },

  kebabCase (strs: array): str {
    return strs.map((str: string): string => str.toLowerCase()).join('-')
  }

})

module.exports = xdString
