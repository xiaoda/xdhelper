/**
 * 算术模块
 * @flow
 */

import XdModule from './'
import xdType from './type'

const NUM_1000 = 1000
const NUM_1024 = 1024

const xdMath = new XdModule({

  multiply1k (num: number | string, times: number | string = 1): number {
    return xdType.toNum(num) * Math.pow(NUM_1000, xdType.toNum(times))
  },

  devide1k (num: number | string, times: number | string = 1): number {
    return xdType.toNum(num) / Math.pow(NUM_1000, xdType.toNum(times))
  },

  multiply1024 (num: number | string, times: number | string = 1): number {
    return xdType.toNum(num) * Math.pow(NUM_1024, xdType.toNum(times))
  },

  devide1024 (num: number | string, times: number | string = 1): number {
    return xdType.toNum(num) / Math.pow(NUM_1024, xdType.toNum(times))
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
