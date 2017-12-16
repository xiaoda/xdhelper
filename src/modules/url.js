/**
 * url模块
 *
 * @flow
 */

let xdUrl = {

  buildQueryStr (data: object): string {
    let queries = []
    Object.keys(data).forEach((key: number, index: string) => {
      queries.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    })
    return queries.length ? `?${queries.join('&')}` : ''
  },

  getQueryParams (url: string = window.location.search): object {
    let urlArray
    let resultObj = {}
    if (!url) urlArray = []
    else if (url.charAt(0) === '?') urlArray = url.slice(1).split('&')
    else urlArray = url.split('&')
    urlArray.forEach((item: array, key: number) => {
      let array = item.split('=')
      resultObj[array[0]] = array[1]
    })
    return resultObj
  }

}

module.exports = xdUrl
