let assert = require('assert')
let xd = require('../../dist')

describe('xdString', function () {

  describe('#capitalize()', function () {
    it('capitalize word', function () {
      assert.equal(
        xd.capitalize('word'),
        'String'
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

  describe('#kebabCase()', function () {
    it('kebabCase words', function () {
      assert.equal(
        xd.kebabCase(['fire', 'in', 'the', 'hole']),
        'fire-in-the-hole'
      )
    })
  })

})
