let assert = require('assert')
let xd = require('../../dist')

describe('xdUrl', function () {

  describe('#buildQueryStr()', function () {
    it('object type', function () {
      assert.equal(
        xd.buildQueryStr({a: 'x', b: 'y'}),
        'a=x&b=y'
      )
    })
  })

  describe('#getQueryParams()', function () {
    it('string type', function () {
      assert.equal(
        JSON.stringify(xd.getQueryParams('a=x&b=y')),
        JSON.stringify({a: 'x', b: 'y'})
      )
    })
  })

})
