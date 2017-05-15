import XdModule from './'

/**
 * 数组模块
 */

const xdArray = new XdModule({

  toggleArrItem (array, item) {
    let index = array.indexOf(item)
    if (index === -1) array.push(item)
    else array.splice(index, 1)
    return array
  },

  addArrUniqItem (array, item) {
    if (!array.includes(item)) array.push(item)
    return array
  }

})

module.exports = xdArray
