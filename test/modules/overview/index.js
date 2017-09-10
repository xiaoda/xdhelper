const assert = require('assert')
const xd = require('../../../dist')

describe('xdOverview', function () {

  describe('#chain()', function () {
    it('simple chain', function () {
      assert.equal(
        xd.chain(2, 'multiply1k', 'multiply1k'),
        2000000
      )
    })

    it('complicated chain', function () {
      assert.equal(
        xd.chain(2, ['multiply1k'], ['multiply1k', 2]),
        2000000000
      )
    })

    it('custom chain', function () {
      let custom = (num, times = 1) => num * times * 10

      assert.equal(
        xd.chain(2, custom, [custom, 2]),
        400
      )
    })
  })

})
