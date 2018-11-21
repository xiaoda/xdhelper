/**
 * url模块
 *
 * @flow
 */

const xdObj = require('./object')
const xdType = require('./type')

const xdUrl = {

  buildQueryStr (queryObj: object): string {
    let queryArr = []

    xdObj.forEachObj(queryObj, (val: mixed, key: string) => {
      queryArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    })

    return queryArr.length ? `?${queryArr.join('&')}` : ''
  },

  getQueryParam (url: string): object {
    let queryArr
    let queryObj = {}

    if (!url && xdType.isDef(window)) url = window.location.search

    if (!url) queryArr = []
    else if (url.startsWith('?')) queryArr = url.slice(1).split('&')
    else queryArr = url.split('&')

    queryArr.forEach((item: string) => {
      let [key, val] = item.split('=')
      queryObj[key] = xdType.isNum(xdType.toNum(val)) ? xdType.toNum(val) : val
    })

    return queryObj
  }

}

module.exports = xdUrl
