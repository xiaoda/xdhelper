const assert = require('assert')
const xd = require('../../../')

describe('xdObject', () => {

  describe('#getObjLen()', () => {
    it('object', () => {
      assert.equal(
        xd.getObjLen({a: 1, b: 2}),
        2
      )
    })
  })

  describe('#hasObjKey()', () => {
    it('has key', () => {
      assert.equal(
        xd.hasObjKey({a: 1, b: 2}, 'a'),
        true
      )
    })
    it('has not key', () => {
      assert.equal(
        xd.hasObjKey({a: 1, b: 2}, 'c'),
        false
      )
    })
  })

  describe('#isObjEmpty()', () => {
    it('object empty', () => {
      assert.equal(
        xd.isObjEmpty({}),
        true
      )
    })
    it('object not empty', () => {
      assert.equal(
        xd.isObjEmpty({a: 1, b: 2}),
        false
      )
    })
  })

  describe('#isObjEqual()', () => {
    it('object equal', () => {
      assert.equal(
        xd.isObjEqual({a: 1, b: 2}, {a: 1, b: 2}),
        true
      )
    })
    it('object not equal', () => {
      assert.equal(
        xd.isObjEqual({a: 1, b: 2}, {a: 3, b: 4}),
        false
      )
    })
  })

  describe('#cloneObj()', () => {
    it('clone object', () => {
      assert.equal(
        xd.isObjEqual(xd.cloneObj({a: 1, b: 2}), {a: 1, b: 2}),
        true
      )
    })
  })

  describe('#forEachObj()', () => {
    it('object empty', () => {
      assert.equal(
        xd.forEachObj({}),
        0
      )
    })
    it('object not empty', (done) => {
      let objA = {a: 1, b: 2}
      let objB = {}
      xd.forEachObj(objA, (value, key) => {
        objB[key] = value
      })
      if (xd.isObjEqual(objA, objB)) done()
    })
  })

})
