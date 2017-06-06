let assert = require('assert')
let xd = require('../../dist')

let testData = [
  {value: 'string', type: 'string', isStr: true},
  {value: 1, type: 'number', isNum: true},
  {value: [1, 2], type: 'array', isArr: true},
  {value: {a: 1, b: 2}, type: 'object', isObj: true},
  {value: () => {}, type: 'function', isFunc: true},
  {value: /a-z1-9/, type: 'regexp', isRegExp: true},
  {value: true, type: 'boolean', isBoolean: true},
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

  describe('#toNum()', function () {
    it('string type', function () {
      assert.equal(
        xd.toNum(1),
        '1'
      )
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

})
