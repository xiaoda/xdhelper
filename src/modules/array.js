/**
 * 数组模块
 *
 * @flow
 */

const xdType = require('./type')

const xdArray = {

  isArrEmpty (arr: array): boolean {
    return !arr.length
  },

  isArrEqual (arrA: array, arrB: array): boolean {
    return JSON.stringify(arrA) === JSON.stringify(arrB)
  },

  cloneArr (arr: array): array {
    return JSON.parse(JSON.stringify(arr))
  },

  countArrItem (arr: array, item: mixed): number {
    return arr.filter((i: mixed): array => i === item).length
  },

  addArrUniqItem (arr: array, items: mixed): array {
    if (!xdType.isArr(items)) items = [items]

    items.forEach((item: mixed) => {
      if (!arr.includes(item)) arr.push(item)
    })

    return arr
  },

  removeArrItem (arr: array, items: mixed): array {
    if (!xdType.isArr(items)) items = [items]

    items.forEach((item: mixed) => {
      if (arr.includes(item)) arr.splice(arr.indexOf(item), 1)
    })

    return arr
  },

  toggleArrItem (arr: array, items: mixed): array {
    if (!xdType.isArr(items)) items = [items]

    items.forEach((item: mixed) => {
      if (arr.includes(item)) arr.splice(arr.indexOf(item), 1)
      else arr.push(item)
    })

    return arr
  },

  getArrFirstItem (arr: array, num: number = 1): mixed {
    let result = []

    for (let i = 0; i < num; i++) {
      result.push(arr[i])
    }

    return result.length === 1 ? result[0] : result
  },

  getArrLastItem (arr: array, num: number = 1): mixed {
    let result = []

    for (let i = arr.length - num; i < arr.length; i++) {
      result.push(arr[i])
    }

    return result.length === 1 ? result[0] : result
  },

  getArrGreatestItem (arr: array, num: number = 1): mixed {
    let sortedArr = this.sortArr(arr, 'desc')

    return this.getArrFirstItem(sortedArr, num)
  },

  getArrLeastItem (arr: array, num: number = 1): mixed {
    let sortedArr = this.sortArr(arr)

    return this.getArrFirstItem(sortedArr, num)
  },

  getArrGreatestItemBy (arr: array, field: string, num: number = 1): object {
    let sortedArr = this.sortArrBy(arr, field, 'desc')

    return this.getArrFirstItem(sortedArr, num)
  },

  getArrLeastItemBy (arr: array, field: string, num: number = 1): object {
    let sortedArr = this.sortArrBy(arr, field)

    return this.getArrFirstItem(sortedArr, num)
  },

  getArrRepeatedItem (arr: array, times: mixed): array {
    let counter = new Map()

    arr.forEach((item: mixed) => {
      let key = item
      let count

      if (counter.has(key)) count = counter.get(key) + 1
      else count = 1
      counter.set(key, count)
    })

    let targetArr = []

    switch (xdType.getType(times)) {
      case 'number':
      case 'string':
        times = xdType.toNum(times)
        counter.forEach((count: number, key: mixed) => {
          if (count === times) targetArr.push(key)
        })
        break

      case 'function':
        counter.forEach((count: number, key: mixed) => {
          if (times(count)) targetArr.push(key)
        })
        break

      default:
        counter.forEach((count: number, key: mixed) => {
          targetArr.push(key)
        })
    }

    return targetArr
  },

  uniqArr (arr: array): array {
    return this.getArrRepeatedItem(arr)
  },

  unionArr (...arrs: mixed): array {
    let tmpArr = []

    arrs.forEach((singleArr: array): array => {
      tmpArr = tmpArr.concat(this.uniqArr(singleArr))
    })

    return this.getArrRepeatedItem(tmpArr)
  },

  intersectArr (...arrs: mixed): array {
    let tmpArr = []

    arrs.forEach((singleArr: array): array => {
      tmpArr = tmpArr.concat(this.uniqArr(singleArr))
    })

    return this.getArrRepeatedItem(tmpArr, arrs.length)
  },

  sortArr (arr: array, order: string = 'asc'): array {
    let targetArr
    let isItemsAllNum = arr.every((item: mixed): boolean => xdType.isNum(item))

    if (isItemsAllNum) targetArr = arr.sort((a: number, b: number): boolean => a - b)
    else targetArr = arr.sort()

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

  shuffleArr (arr: array): array {
    let indexArr = arr.map((item: mixed, key: number): number => key)
    let targetArr = []

    while (indexArr.length > 0) {
      let randomIndex = Math.floor(Math.random() * indexArr.length)

      targetArr.push(arr[indexArr[randomIndex]])
      indexArr.splice(randomIndex, 1)
    }

    return targetArr
  },

  getArrSample (arr: array, num: number = 1): mixed {
    return this.getArrFirstItem(this.shuffleArr(arr), num)
  }

}

module.exports = xdArray
