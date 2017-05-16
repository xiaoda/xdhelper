/**
 * 数组模块
 * @flow
 */

import XdModule from './'

const xdArray = new XdModule({

  toggleArrItem (array: array, item: mixed): array {
    let index = array.indexOf(item)
    if (index === -1) array.push(item)
    else array.splice(index, 1)
    return array
  },

  addArrUniqItem (array: array, item: mixed): array {
    if (!array.includes(item)) array.push(item)
    return array
  }

})

module.exports = xdArray
