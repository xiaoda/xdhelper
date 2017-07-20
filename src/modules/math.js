/**
 * 算术模块
 *
 * @flow
 */

import XdModule from './'
import xdType from './type'

const NUM_1000 = 1000
const NUM_1024 = 1024

let xdMath = new XdModule({

  sum (...arr: mixed): number {
    if (xdType.isArr(arr[0])) arr = arr[0]
    return arr.reduce((acc: number, val: number): number => acc + xdType.toNum(val))
  },

  mean (...arr: mixed): number {
    if (xdType.isArr(arr[0])) arr = arr[0]
    let sum = this.sum(arr)
    let count = arr.length
    return sum / count
  },

  multiply (numA: number | string, numB: number | string, times: number | string = 1): number {
    return xdType.toNum(numA) * Math.pow(numB, xdType.toNum(times))
  },

  multiply1k (num: number | string, times: number | string = 1): number {
    return this.multiply(num, 1000, times)
  },

  multiply1024 (num: number | string, times: number | string = 1): number {
    return this.multiply(num, 1024, times)
  },

  devide (numA: number | string, numB: number | string, times: number | string = 1): number {
    return xdType.toNum(numA) / Math.pow(numB, xdType.toNum(times))
  },

  devide1k (num: number | string, times: number | string = 1): number {
    return this.devide(num, 1000, times)
  },

  devide1024 (num: number | string, times: number | string = 1): number {
    return this.devide(num, 1024, times)
  },

  /* 补零 */
  fillZero (num: number | string, width: number, direction: string = 'left'): string {
    num = xdType.toStr(num)
    let len = num.length
    if (len >= width) return num
    else {
      if (direction === 'right') return `${num}${'0'.repeat(width - len)}`
      else return `${'0'.repeat(width - len)}${num}`
    }
  }

})

module.exports = xdMath
