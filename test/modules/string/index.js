const assert = require('assert')
const xd = require('../../../')

describe('xdString', function () {

  describe('#isStrEmpty()', function () {
    it('string empty', function () {
      assert.equal(
        xd.isStrEmpty(''),
        true
      )
    })
    it('string not empty', function () {
      assert.equal(
        xd.isStrEmpty('abc'),
        false
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

  describe('#kebabCase()', function () {
    it('kebabCase words', function () {
      assert.equal(
        xd.kebabCase(['fire', 'in', 'the', 'hole']),
        'fire-in-the-hole'
      )
    })
  })

  describe('#fillZero()', function () {
    it('need fill', function () {
      assert.equal(
        xd.fillZero(1, 2),
        '01'
      )
    })
    it('not need fill', function () {
      assert.equal(
        xd.fillZero(1, 1),
        '1'
      )
    })
  })

})
