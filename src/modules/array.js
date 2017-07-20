/**
 * 数组模块
 * 用作 Lodash / underscore 以外的补充
 *
 * @flow
 */

import XdModule from './'
import xdType from './type'

let xdArray = new XdModule({

  getArrLen (arr: array): number {
    return arr.length
  },

  isArrEmpty (arr: array): boolean {
    return !this.getArrLen(arr)
  },

  countArrItem (arr: array, item: mixed): number {
    return arr.filter((i: mixed): array => i === item).length
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
  },

  getArrRepeatedItems (arr: array, times: mixed): array {
    let counter = {}
    arr.forEach((item: mixed) => {
      let key = JSON.stringify(item)
      if (xdType.isUndefined(counter[key])) counter[key] = 1
      else counter[key] ++
    })
    let targetArr = []
    switch (xdType.getType(times)) {
      case 'number':
      case 'string':
        times = xdType.toNum(times)
        Object.keys(counter).forEach((key: string) => {
          if (counter[key] === times) targetArr.push(JSON.parse(key))
        })
        break
      case 'function':
        Object.keys(counter).forEach((key: string) => {
          if (times(counter[key])) targetArr.push(JSON.parse(key))
        })
        break
      default:
        Object.keys(counter).forEach((key: string) => {
          targetArr.push(JSON.parse(key))
        })
    }
    return targetArr
  },

  uniqArr (arr: array): array {
    return this.getArrRepeatedItems(arr)
  },

  unionArr (...arr: mixed): array {
    let tmpArr = []
    arr.forEach((singleArr: array): array => {
      tmpArr = tmpArr.concat(this.uniqArr(singleArr))
    })
    return this.getArrRepeatedItems(tmpArr)
  },

  intersectArr (...arr: mixed): array {
    let tmpArr = []
    arr.forEach((singleArr: array): array => {
      tmpArr = tmpArr.concat(this.uniqArr(singleArr))
    })
    return this.getArrRepeatedItems(tmpArr, arr.length)
  },

  complementArr (...arr: mixed): array {
    let tmpArr = []
    arr.forEach((singleArr: array): array => {
      tmpArr = tmpArr.concat(this.uniqArr(singleArr))
    })
    return this.getArrRepeatedItems(tmpArr, 1)
  }

})

module.exports = xdArray
