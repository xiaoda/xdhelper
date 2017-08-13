const assert = require('assert')
const xd = require('../../../dist')

describe('xdFunction', function () {

  describe('#execFunc()', function () {
    it('legal function', function (done) {
      xd.execFunc((param) => {
        if (param === 1) done()
      }, 1)
    })
    it('illegal function', function () {
      assert.equal(
        xd.execFunc('string'),
        null
      )
    })
  })

})
