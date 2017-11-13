const assert = require('assert')
const xd = require('../../../dist')

describe('xdObject', function () {

  describe('#getObjLen()', function () {
    it('object', function () {
      assert.equal(
        xd.getObjLen({a: 1, b: 2}),
        2
      )
    })
  })

  describe('#hasObjKey()', function () {
    it('object has specific key', function () {
      assert.equal(
        xd.hasObjKey({a: 1, b: 2}, 'a'),
        true
      )
    })
    it('object has not specific key', function () {
      assert.equal(
        xd.hasObjKey({a: 1, b: 2}, 'c'),
        false
      )
    })
  })

  describe('#isObjEmpty()', function () {
    it('empty object', function () {
      assert.equal(
        xd.isObjEmpty({}),
        true
      )
    })
    it('not empty object', function () {
      assert.equal(
        xd.isObjEmpty({a: 1, b: 2}),
        false
      )
    })
  })

  describe('#isObjEqual()', function () {
    it('object equal', function () {
      assert.equal(
        xd.isObjEqual({a: 1, b: 2}, {a: 1, b: 2}),
        true
      )
    })
    it('object not equal', function () {
      assert.equal(
        xd.isObjEqual({a: 1, b: 2}, {a: 3, b: 4}),
        false
      )
    })
  })

  describe('#cloneObj()', function () {
    it('clone object', function () {
      let obj = {a: 1, b: 2}
      let cloneObj = xd.cloneObj(obj)
      cloneObj.a = 99
      assert.equal(
        obj.a,
        1
      )
    })
  })

  describe('#forEachObj()', function () {
    it('empty object', function () {
      assert.equal(
        xd.forEachObj({}),
        0
      )
    })
    it('not empty object', function (done) {
      let objA = {a: 1, b: 2}
      let objB = {}
      xd.forEachObj(objA, (value, key) => {
        objB[key] = value
      }, 1)
      if (JSON.stringify(objA) === JSON.stringify(objB)) done()
    })
  })

})
