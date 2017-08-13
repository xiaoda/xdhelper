const assert = require('assert')
const xd = require('../../../dist')

describe('xdString', function () {

  describe('#getStrLen()', function () {
    it('word', function () {
      assert.equal(
        xd.getStrLen('fire in the hole'),
        16
      )
    })
  })

  describe('#capitalize()', function () {
    it('capitalize word', function () {
      assert.equal(
        xd.capitalize('fire in the hole'),
        'Fire In The Hole'
      )
    })
  })

  describe('#kebabCase()', function () {
    it('kebabCase words', function () {
      assert.equal(
        xd.kebabCase(['fire', 'in', 'the', 'hole']),
        'fire-in-the-hole'
      )
    })
  })

  describe('#camelCase()', function () {
    it('camelCase words', function () {
      assert.equal(
        xd.camelCase(['fire', 'in', 'the', 'hole']),
        'fireInTheHole'
      )
    })
  })

  describe('#capitalCamelCase()', function () {
    it('capitalCamelCase words', function () {
      assert.equal(
        xd.capitalCamelCase(['fire', 'in', 'the', 'hole']),
        'FireInTheHole'
      )
    })
  })

})
