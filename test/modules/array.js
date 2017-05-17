let assert = require('assert')
let xd = require('../../dist')

describe('xdArray', function () {

  describe('#toggleArrItem()', function () {
    it('add item', function () {
      assert.equal(
        JSON.stringify(xd.toggleArrItem([1, 2], 3)),
        JSON.stringify([1, 2, 3])
      )
    })
    it('remove item', function () {
      assert.equal(
        JSON.stringify(xd.toggleArrItem([1, 2, 3], 3)),
        JSON.stringify([1, 2])
      )
    })
  })

  describe('#addArrUniqItem()', function () {
    it('add item', function () {
      assert.equal(
        JSON.stringify(xd.addArrUniqItem([1, 2], 3)),
        JSON.stringify([1, 2, 3])
      )
    })
    it('not add item', function () {
      assert.equal(
        JSON.stringify(xd.addArrUniqItem([1, 2, 3], 3)),
        JSON.stringify([1, 2, 3])
      )
    })
  })

})
