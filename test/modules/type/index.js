const assert = require('assert')
const xd = require('../../../')
const data = require('./data')

describe('xdType', () => {

  describe('#getType()', () => {
    data.list.forEach((item, key) => {
      it(`${item.type}`, () => {
        assert.equal(
          xd.getType(item.value),
          item.type
        )
      })
    })
  })

  data.funcs.forEach((item, key) => {
    describe(`#${item}()`, () => {
      data.list.forEach((i, k) => {
        it(`${i.type}`, () => {
          assert.equal(
            xd[item](i.value),
            !!i[item]
          )
        })
      })
    })
  })

  describe('#toBool()', () => {
    it('string to true', () => {
      assert.equal(
        xd.toBool('abc'),
        true
      )
    })
    it('string to false', () => {
      assert.equal(
        xd.toBool(''),
        false
      )
    })
    it('number to true', () => {
      assert.equal(
        xd.toBool(123),
        true
      )
    })
    it('number to false', () => {
      assert.equal(
        xd.toBool(0),
        false
      )
    })
  })

  describe('#toStr()', () => {
    it('number type', () => {
      assert.equal(
        xd.toStr(1),
        '1'
      )
    })
  })

  describe('#toNum()', () => {
    it('string type', () => {
      assert.equal(
        xd.toNum('1'),
        1
      )
    })
  })

  describe('#objToArr()', () => {
    it('object', () => {
      assert.equal(
        xd.isArrEqual(xd.objToArr({a: 1, b: 2}), [1, 2]),
        true
      )
    })
  })

})
