/**
 * 数组模块
 * 用作 Lodash / underscore 以外的补充
 *
 * @flow
 */

import XdModule from './'

let xdArray = new XdModule({

  isArrEmpty (arr: array): boolean {
    return !arr.length
  },

  addArrUniqItem (arr: array, item: mixed): array {
    if (!arr.includes(item)) arr.push(item)
    return arr
  },

  removeArrItem (arr: array, item: mixed): array {
    if (arr.includes(item)) {
      arr.splice(arr.indexOf(item), 1)
    }
    return arr
  },

  toggleArrItem (arr: array, item: mixed): array {
    let index = arr.indexOf(item)
    if (index === -1) arr.push(item)
    else arr.splice(index, 1)
    return arr
  }

})

module.exports = xdArray
