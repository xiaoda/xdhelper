let assert = require('assert')
let xd = require('../../dist')

describe('xdObject', function () {

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

  describe('#clone()', function () {
    it('clone array', function () {
      let arr = [1, 2]
      let cloneArr = xd.clone(arr)
      cloneArr[0] = 99
      assert.equal(
        arr[0],
        1
      )
    })
    it('clone object', function () {
      let obj = {a: 1, b: 2}
      let cloneObj = xd.clone(obj)
      cloneObj.a = 99
      assert.equal(
        obj.a,
        1
      )
    })
  })

  describe('#isObjEqual()', function () {
    it('array equal', function () {
      assert.equal(
        xd.isObjEqual([1, 2], [1, 2]),
        true
      )
    })
    it('array not equal', function () {
      assert.equal(
        xd.isObjEqual([1, 2], [3, 4]),
        false
      )
    })
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

  describe('#loopObj()', function () {
    it('empty object', function () {
      assert.equal(
        xd.loopObj({}),
        0
      )
    })
    it('not empty object', function (done) {
      let objA = {a: 1, b: 2}
      let objB = {}
      xd.loopObj(objA, (value, key) => {
        objB[key] = value
      }, 1)
      if (JSON.stringify(objA) === JSON.stringify(objB)) done()
    })
  })

})
