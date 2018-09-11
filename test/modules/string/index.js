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
    it('params in array type', function () {
      assert.equal(
        xd.camelCase(['fire', 'in', 'the', 'hole']),
        'fireInTheHole'
      )
    })
    it('params in array type & force format', function () {
      assert.equal(
        xd.camelCase(['FIRE', 'IN', 'THE', 'HOLE'], true),
        'fireInTheHole'
      )
    })
    it('params in string type', function () {
      assert.equal(
        xd.camelCase('fire', 'in', 'the', 'hole'),
        'fireInTheHole'
      )
    })
    it('params in string type & force format', function () {
      assert.equal(
        xd.camelCase('FIRE', 'IN', 'THE', 'HOLE', true),
        'fireInTheHole'
      )
    })
  })

  describe('#capitalCamelCase()', function () {
    it('params in array type', function () {
      assert.equal(
        xd.capitalCamelCase(['fire', 'in', 'the', 'hole']),
        'FireInTheHole'
      )
    })
    it('params in array type & force format', function () {
      assert.equal(
        xd.capitalCamelCase(['FIRE', 'IN', 'THE', 'HOLE'], true),
        'FireInTheHole'
      )
    })
    it('params in string type', function () {
      assert.equal(
        xd.capitalCamelCase('fire', 'in', 'the', 'hole'),
        'FireInTheHole'
      )
    })
    it('params in string type & force format', function () {
      assert.equal(
        xd.capitalCamelCase('FIRE', 'IN', 'THE', 'HOLE', true),
        'FireInTheHole'
      )
    })
  })

  describe('#kebabCase()', function () {
    it('params in array type', function () {
      assert.equal(
        xd.kebabCase(['fire', 'in', 'the', 'hole']),
        'fire-in-the-hole'
      )
    })
    it('params in array type & force format', function () {
      assert.equal(
        xd.kebabCase(['FIRE', 'IN', 'THE', 'HOLE'], true),
        'fire-in-the-hole'
      )
    })
    it('params in string type', function () {
      assert.equal(
        xd.kebabCase('fire', 'in', 'the', 'hole'),
        'fire-in-the-hole'
      )
    })
    it('params in string type & force format', function () {
      assert.equal(
        xd.kebabCase('FIRE', 'IN', 'THE', 'HOLE', true),
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
