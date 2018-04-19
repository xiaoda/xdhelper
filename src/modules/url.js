/**
 * url模块
 *
 * @flow
 */

const xdObj = require('./object')

const xdUrl = {

  buildQueryStr (queryObj: object): string {
    let queryArr = []

    xdObj.forEachObj(queryObj, (val: mixed, key: string) => {
      queryArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    })

    return queryArr.length ? `?${queryArr.join('&')}` : ''
  },

  getQueryParam (url: string = window.location.search): object {
    let queryArr
    let queryObj = {}

    if (!url) queryArr = []
    else if (url.charAt(0) === '?') queryArr = url.slice(1).split('&')
    else queryArr = url.split('&')

    queryArr.forEach((item: string, key: number) => {
      let arr = item.split('=')
      queryObj[arr[0]] = arr[1]
    })

    return queryObj
  }

}

module.exports = xdUrl
