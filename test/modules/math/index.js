const assert = require('assert')
const xd = require('../../../')

describe('xdMath', () => {

  describe('#sum()', () => {
    it('sum', () => {
      assert.equal(
        xd.sum([1, 2, 3, 4]),
        10
      )
    })
  })

  describe('#product()', () => {
    it('product', () => {
      assert.equal(
        xd.product([1, 2, 3, 4]),
        24
      )
    })
  })

  describe('#mean()', () => {
    it('mean', () => {
      assert.equal(
        xd.mean([1, 2, 3, 4]),
        2.5
      )
    })
  })

  describe('#medium()', () => {
    it('odd number', () => {
      assert.equal(
        xd.medium([1, 2, 4]),
        2
      )
    })
    it('even number', () => {
      assert.equal(
        xd.medium([1, 2, 4, 8]),
        3
      )
    })
  })

  describe('#map()', () => {
    it('number type', () => {
      assert.equal(
        xd.map(5, [0, 10], [-100, -200]),
        -150
      )
    })
  })

})
