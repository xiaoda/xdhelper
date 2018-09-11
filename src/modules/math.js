/**
 * 算术模块
 *
 * @flow
 */

const xdType = require('./type')
const xdArr = require('./array')

const xdMath = {

  sum (...arr: mixed): number {
    if (xdType.isArr(arr[0])) arr = arr[0]

    return arr.reduce((result: number, num: number): number => result + xdType.toNum(num))
  },

  product (...arr: mixed): number {
    if (xdType.isArr(arr[0])) arr = arr[0]

    return arr.reduce((result: number, num: number): number => result * xdType.toNum(num))
  },

  mean (...arr: mixed): number {
    if (xdType.isArr(arr[0])) arr = arr[0]

    let sum = this.sum(arr)
    let count = arr.length

    return sum / count
  },

  medium (...arr: mixed): number {
    if (xdType.isArr(arr[0])) arr = arr[0]

    let sortedArr = xdArr.sortArr(arr)
    let result

    if (sortedArr.length % 2) {
      result = sortedArr[(sortedArr.length - 1) / 2]
    } else {
      let mediumA = sortedArr[sortedArr.length / 2 - 1]
      let mediumB = sortedArr[sortedArr.length / 2]
      result = this.mean(mediumA, mediumB)
    }

    return result
  },

  map (num: number, rangeA: array, rangeB: array): number {
    num = xdType.toNum(num)
    let [startA, endA] = rangeA.map(xdType.toNum)
    let [startB, endB] = rangeB.map(xdType.toNum)

    return startB + (num - startA) / (endA - startA) * (endB - startB)
  },

  random (range: array, decimal: number = 0): number {
    let random = this.map(Math.random(), [0, 1], range)

    return decimal === -1 ? random : random.toFixed(decimal)
  }

}

module.exports = xdMath
