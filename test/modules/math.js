let assert = require('assert')
let xd = require('../../dist')

describe('xdMath', function () {

  describe('#multiply1k()', function () {
    it('number type', function () {
      assert.equal(
        xd.multiply1k(2),
        2000
      )
    })
  })

  describe('#devide1k()', function () {
    it('number type', function () {
      assert.equal(
        xd.devide1k(2000),
        2
      )
    })
  })

  describe('#multiply1024()', function () {
    it('number type', function () {
      assert.equal(
        xd.multiply1024(2),
        2048
      )
    })
  })

  describe('#devide1024()', function () {
    it('number type', function () {
      assert.equal(
        xd.devide1024(2048),
        2
      )
    })
  })

  describe('#fillZero()', function () {
    it('need fill', function () {
      assert.equal(
        xd.fillZero(2, 2),
        '02'
      )
    })
    it('not need fill', function () {
      assert.equal(
        xd.fillZero('12', 2),
        '12'
      )
    })
  })

})
