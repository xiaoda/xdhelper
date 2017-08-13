const assert = require('assert')
const xd = require('../../../dist')

describe('xdMask', function () {

  describe('#mobileMask()', function () {
    it('number type', function () {
      assert.equal(
        xd.mobileMask(18917177979),
        '189****7979'
      )
    })
    it('string type', function () {
      assert.equal(
        xd.mobileMask('18917177979'),
        '189****7979'
      )
    })
  })

  describe('#emailMask()', function () {
    it('legal email address', function () {
      assert.equal(
        xd.emailMask('616177818@qq.com'),
        '61617****@qq.com'
      )
    })
  })

  describe('#idNumMask()', function () {
    it('legal id number', function () {
      assert.equal(
        xd.idNumMask('310102199909093612'),
        '310***********3612'
      )
    })
  })

})
