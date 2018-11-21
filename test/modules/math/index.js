const assert = require('assert')
const xd = require('../../../')

describe('xdMath', () => {

  describe('#getSum()', () => {
    it('sum', () => {
      assert.equal(
        xd.getSum([1, 2, 3, 4]),
        10
      )
    })
  })

  describe('#getProduct()', () => {
    it('product', () => {
      assert.equal(
        xd.getProduct([1, 2, 3, 4]),
        24
      )
    })
  })

  describe('#getMean()', () => {
    it('mean', () => {
      assert.equal(
        xd.getMean([1, 2, 3, 4]),
        2.5
      )
    })
  })

  describe('#getMedium()', () => {
    it('odd number', () => {
      assert.equal(
        xd.getMedium([1, 2, 4]),
        2
      )
    })
    it('even number', () => {
      assert.equal(
        xd.getMedium([1, 2, 4, 8]),
        3
      )
    })
  })

  describe('#mapRange()', () => {
    it('number type', () => {
      assert.equal(
        xd.mapRange(5, [0, 10], [-100, -200]),
        -150
      )
    })
  })

})
