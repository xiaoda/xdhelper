/**
 * 数组模块
 * 用作 Lodash / underscore 以外的补充
 *
 * @flow
 */

import XdModule from './'

let xdArray = new XdModule({

  getArrLen (arr: array): number {
    return arr.length
  },

  isArrEmpty (arr: array): boolean {
    return !this.getArrLen(arr)
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
  },

  uniqArr (arr: array): array {
    let targetArr = []
    arr.forEach((item: mixed) => {
      if (!targetArr.includes(item)) targetArr.push(item)
    })
    return targetArr
  },

  unionArr (arrA: array, arrB: array): array {
    return this.uniqArr(arrA.concat(arrB))
  },

  intersectArr (arrA: array, arrB: array): array {
    let targetArr = []
    arrA.forEach((item: mixed) => {
      if (arrB.includes(item)) targetArr.push(item)
    })
    return targetArr
  },

  complementArr (arrA: array, arrB: array): array {
    let targetArr = []
    arrA.forEach((item: mixed) => {
      if (!arrB.includes(item)) targetArr.push(item)
    })
    return targetArr
  },

  sortArr (arr: array, order: string = 'asc'): array {
    let targetArr = arr.sort()
    if (order === 'desc') targetArr = targetArr.reverse()
    return targetArr
  },

  sortArrBy (arr: array, field: string, order: string = 'asc'): array {
    let targetArr = arr.sort((itemA: object, itemB: object): number => {
      if (itemA[field] > itemB[field]) return 1
      else if (itemA[field] < itemB[field]) return -1
      else return 0
    })
    if (order === 'desc') targetArr = targetArr.reverse()
    return targetArr
  },

  getArrSample (arr: array): mixed {
    let arrLen = this.getArrLen(arr)
    let randomIndex = Math.floor(Math.random() * arrLen)
    return arr[randomIndex]
  },

  shuffleArr (arr: array): array {
    let copyArr = JSON.parse(JSON.stringify(arr))
    let targetArr = []
    while (copyArr.length) {
      let randomIndex = Math.floor(Math.random() * copyArr.length)
      targetArr.push(copyArr[randomIndex])
      copyArr.splice(randomIndex, 1)
    }
    return targetArr
  }

})

module.exports = xdArray
