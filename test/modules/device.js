let assert = require('assert')
let xd = require('../../dist')

const IPHONE_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1'
const IPAD_USER_AGENT = 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B14 3 Safari/601.1'
const IPOD_USER_AGENT = 'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53'
const ANDROID_USER_AGENT = 'Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; HTC_D820u Build/KTU84P) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
const CHROME_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

let testData = {
  iPhone: {
    userAgent: IPHONE_USER_AGENT,
    expect: {
      isMobile: true,
      isPad: false,
      isAndroid: false,
      isiOS: true,
      isiPhone: true,
      isiPad: false,
      isiPod: false
    }
  },
  iPad: {
    userAgent: IPAD_USER_AGENT,
    expect: {
      isMobile: false,
      isPad: true,
      isAndroid: false,
      isiOS: true,
      isiPhone: false,
      isiPad: true,
      isiPod: false
    }
  },
  iPod: {
    userAgent: IPOD_USER_AGENT,
    expect: {
      isMobile: true,
      isPad: false,
      isAndroid: false,
      isiOS: true,
      isiPhone: false,
      isiPad: false,
      isiPod: true
    }
  },
  Android: {
    userAgent: ANDROID_USER_AGENT,
    expect: {
      isMobile: true,
      isPad: false,
      isAndroid: true,
      isiOS: false,
      isiPhone: false,
      isiPad: false,
      isiPod: false
    }
  },
  Chrome: {
    userAgent: CHROME_USER_AGENT,
    expect: {
      isMobile: false,
      isPad: false,
      isAndroid: false,
      isiOS: false,
      isiPhone: false,
      isiPad: false,
      isiPod: false
    }
  },
}
let detectFuncs = [
  'isMobile', 'isPad', 'isAndroid',
  'isiOS', 'isiPhone', 'isiPad', 'isiPod'
]

describe('xdDevice', function () {

  detectFuncs.forEach((item, key) => {
    describe(`#${item}()`, function () {
      Object.keys(testData).forEach((k, i) => {
        it(k, function () {
          assert.equal(
            xd[item](testData[k]['userAgent']),
            testData[k]['expect'][item]
          )
        })
      })
    })
  })

})
