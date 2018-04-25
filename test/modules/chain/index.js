const assert = require('assert')
const xd = require('../../../')

describe('xdGlobal', () => {

  describe('#chain()', () => {
    it('simple chain', () => {
      assert.equal(
        xd.chain(1, 'fillZero', 'fillZero'),
        '01'
      )
    })

    it('chain with params', () => {
      assert.equal(
        xd.chain(1, ['fillZero'], ['fillZero', 3]),
        '001'
      )
    })

    it('chain with custom functions', () => {
      let add = (initial, num = 1) => initial + num

      assert.equal(
        xd.chain(1, add, [add, 2]),
        4
      )
    })
  })

})
