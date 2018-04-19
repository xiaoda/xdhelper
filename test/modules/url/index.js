const assert = require('assert')
const xd = require('../../../')

describe('xdUrl', () => {

  describe('#buildQueryStr()', () => {
    it('object', () => {
      assert.equal(
        xd.buildQueryStr({a: 'x', b: 'y'}),
        '?a=x&b=y'
      )
    })
  })

  describe('#getQueryParam()', () => {
    it('string', () => {
      assert.equal(
        xd.isObjEqual(
          xd.getQueryParam('a=x&b=y'),
          {a: 'x', b: 'y'}
        ),
        true
      )
    })

    it('number', () => {
      assert.equal(
        xd.isObjEqual(
          xd.getQueryParam('a=1&b=2.5'),
          {a: 1, b: 2.5}
        ),
        true
      )
    })
  })

})
