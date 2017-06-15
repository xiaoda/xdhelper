let assert = require('assert')
let xd = require('../../dist')

describe('xdMath', function () {

  describe('#sum()', function () {
    it('sum', function () {
      assert.equal(
        xd.sum([1, 2, 3, 4]),
        10
      )
    })
  })

  describe('#mean()', function () {
    it('mean', function () {
      assert.equal(
        xd.mean([1, 2, 3, 4]),
        2.5
      )
    })
  })

  describe('#multiply()', function () {
    it('number type', function () {
      assert.equal(
        xd.multiply(3, 3),
        9
      )
    })
  })

  describe('#multiply1k()', function () {
    it('number type', function () {
      assert.equal(
        xd.multiply1k(2),
        2000
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

  describe('#devide()', function () {
    it('number type', function () {
      assert.equal(
        xd.devide(9, 3),
        3
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
