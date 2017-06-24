let assert = require('assert')
let xd = require('../../dist')

let testData = [
  {value: 'string', type: 'string', isStr: true},
  {value: 1, type: 'number', isNum: true},
  {value: [1, 2], type: 'array', isArr: true},
  {value: {a: 1, b: 2}, type: 'object', isObj: true},
  {value: () => {}, type: 'function', isFunc: true},
  {value: /a-z1-9/, type: 'regexp', isRegExp: true},
  {value: true, type: 'boolean', isBool: true},
  {value: new Date(), type: 'date', isDate: true},
  {value: null, type: 'null', isNull: true},
  {value: undefined, type: 'undefined', isUndefined: true},
]
let detectFuncs = [
  'isStr', 'isNum', 'isArr',
  'isObj', 'isFunc', 'isRegExp'
]

describe('xdType', function () {

  describe('#getType()', function () {
    testData.forEach((item, key) => {
      it(`${item.type}`, function () {
        assert.equal(
          xd.getType(item.value),
          item.type
        )
      })
    })
  })

  detectFuncs.forEach((item, key) => {
    describe(`#${item}()`, function () {
      testData.forEach((i, k) => {
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
