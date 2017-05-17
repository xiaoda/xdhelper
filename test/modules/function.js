let assert = require('assert')
let xd = require('../../dist')

describe('xdFunction', function () {

  describe('#safeExecFunc()', function () {
    it('legal function', function (done) {
      xd.safelyExecFunc((param) => {
        if (param === 1) done()
      }, 1)
    })
    it('illegal function', function () {
      assert.equal(
        xd.safelyExecFunc('string'),
        false
      )
    })
  })

})
