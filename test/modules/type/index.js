const assert = require('assert')
const xd = require('../../../dist')
const data = require('./data')

describe('xdType', function () {

  describe('#getType()', function () {
    data.list.forEach((item, key) => {
      it(`${item.type}`, function () {
        assert.equal(
          xd.getType(item.value),
          item.type
        )
      })
    })
  })

  data.funcs.forEach((item, key) => {
    describe(`#${item}()`, function () {
      data.list.forEach((i, k) => {
        it(`${i.type}`, function () {
          assert.equal(
            xd[item](i.value),
            !!i[item]
          )
        })
      })
    })
  })

  describe('#toStr()', function () {
    it('number type', function () {
      assert.equal(
        xd.toStr('1'),
        1
      )
    })
  })

  describe('#toNum()', function () {
    it('string type', function () {
      assert.equal(
        xd.toNum(1),
        '1'
      )
    })
  })

  describe('#toBool()', function () {
    it('string to true', function () {
      assert.equal(
        xd.toBool('abc'),
        true
      )
    })
    it('string to false', function () {
      assert.equal(
        xd.toBool(''),
        false
      )
    })
    it('number to true', function () {
      assert.equal(
        xd.toBool(123),
        true
      )
    })
    it('number to false', function () {
      assert.equal(
        xd.toBool(0),
        false
      )
    })
  })

  describe('#objToArr()', function () {
    it('legal object', function () {
      assert.equal(
        JSON.stringify(xd.objToArr({a: 1, b: 2})),
        JSON.stringify([1, 2])
      )
    })
  })

})
