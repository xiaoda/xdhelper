let assert = require('assert')
let xd = require('../../dist')

describe('xdArray', function () {

  describe('#isArrEmpty()', function () {
    it('empty array', function () {
      assert.equal(
        xd.isArrEmpty([]),
        true
      )
    })
    it('not empty array', function () {
      assert.equal(
        xd.isArrEmpty([1, 2]),
        false
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
        JSON.stringify(xd.addArrUniqItem([1, 2], 2)),
        JSON.stringify([1, 2])
      )
    })
  })

  describe('#removeArrItem()', function () {
    it('remove existent item', function () {
      assert.equal(
        JSON.stringify(xd.removeArrItem([1, 2], 2)),
        JSON.stringify([1])
      )
    })
    it('remove nonexistent item', function () {
      assert.equal(
        JSON.stringify(xd.removeArrItem([1, 2], 3)),
        JSON.stringify([1, 2])
      )
    })
  })

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

})
