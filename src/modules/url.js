import XdModule from './'

/**
 * url模块
 */

const xdUrl = new XdModule({

  buildQueryStr (data) {
    let queries = []
    Object.keys(data).forEach((key, index) => {
      queries.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    })
    return queries.join('&')
  },

  getQueryParams (url = window.location.search) {
    let urlArray
    let resultObj = {}
    if (!url) urlArray = []
    else if (url.charAt(0) === '?') urlArray = url.slice(1).split('&')
    else urlArray = url.split('&')
    urlArray.forEach((item, key) => {
      let array = item.split('=')
      resultObj[array[0]] = array[1]
    })
    return resultObj
  }

})

module.exports = xdUrl
