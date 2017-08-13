const assert = require('assert')
const xd = require('../../../dist')
const data = require('./data')

describe('xdDevice', function () {

  data.funcs.forEach((item, key) => {
    describe(`#${item}()`, function () {
      data.list.forEach((i, k) => {
        it(i.device, function () {
          assert.equal(
            xd[item](i['userAgent']),
            i['expect'][item]
          )
        })
      })
    })
  })

})
