const assert = require('assert')
const xd = require('../../../')
const data = require('./data')

describe('xdDevice', () => {

  data.funcs.forEach((item, key) => {
    describe(`#${item}()`, () => {
      data.list.forEach((i, k) => {
        it(i.device, () => {
          assert.equal(
            xd[item](i['userAgent']),
            i['expect'][item]
          )
        })
      })
    })
  })

})
