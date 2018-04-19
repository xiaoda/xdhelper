const assert = require('assert')
const xd = require('../../../')

describe('xdFunction', () => {

  describe('#safelyRun()', () => {
    it('existent function', (done) => {
      xd.safelyRun((param) => {
        if (param === 1) done()
      }, 1)
    })
    it('nonexistent function', () => {
      assert.equal(
        xd.safelyRun('fake'),
        null
      )
    })
  })

})
