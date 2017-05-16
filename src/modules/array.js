/**
 * 数组模块
 * 用作 Lodash / underscore 以外的补充
 *
 * @flow
 */

import XdModule from './'
import xdObj from './object'

let xdArray = new XdModule({

  toggleArrItem (array: array, item: mixed): array {
    array = xdObj.clone(array)
    item = xdObj.clone(item)
    let index = array.indexOf(item)
    if (index === -1) array.push(item)
    else array.splice(index, 1)
    return array
  },

  addArrUniqItem (array: array, item: mixed): array {
    array = xdObj.clone(array)
    item = xdObj.clone(item)
    if (!array.includes(item)) array.push(item)
    return array
  }

})

module.exports = xdArray
