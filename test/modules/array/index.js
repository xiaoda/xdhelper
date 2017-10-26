const assert = require('assert')
const xd = require('../../../dist')

describe('xdArray', function () {

  describe('#getArrLen()', function () {
    it('get array length', function () {
      assert.equal(
        xd.getArrLen([1, 2]),
        2
      )
    })
  })

  describe('#isArrEmpty()', function () {
    it('empty array', function () {
      assert.equal(
        xd.isArrEmpty([]),
        true
      )
    })
    it('not empty array', function () {
      assert.equal(
        xd.isArrEmpty([1, 2]),
        false
      )
    })
  })

  describe('#countArrItem()', function () {
    it('2 counts', function () {
      assert.equal(
        xd.countArrItem([1, 2, 2], 2),
        2
      )
    })
    it('0 count', function () {
      assert.equal(
        xd.countArrItem([1, 2, 2], 3),
        0
      )
    })
  })

  describe('#addArrUniqItem()', function () {
    it('add item', function () {
      assert.equal(
        JSON.stringify(xd.addArrUniqItem([1, 2], 3)),
        JSON.stringify([1, 2, 3])
      )
    })
    it('not add item', function () {
      assert.equal(
        JSON.stringify(xd.addArrUniqItem([1, 2], 2)),
        JSON.stringify([1, 2])
      )
    })
  })

  describe('#removeArrItem()', function () {
    it('remove existent item', function () {
      assert.equal(
        JSON.stringify(xd.removeArrItem([1, 2], 2)),
        JSON.stringify([1])
      )
    })
    it('remove nonexistent item', function () {
      assert.equal(
        JSON.stringify(xd.removeArrItem([1, 2], 3)),
        JSON.stringify([1, 2])
      )
    })
  })

  describe('#toggleArrItem()', function () {
    it('add item', function () {
      assert.equal(
        JSON.stringify(xd.toggleArrItem([1, 2], 3)),
        JSON.stringify([1, 2, 3])
      )
    })
    it('remove item', function () {
      assert.equal(
        JSON.stringify(xd.toggleArrItem([1, 2, 3], 3)),
        JSON.stringify([1, 2])
      )
    })
  })

  describe('#sortArr()', function () {
    it('sort array asc', function () {
      assert.equal(
        JSON.stringify(xd.sortArr([2, 4, 3, 1])),
        JSON.stringify([1, 2, 3, 4])
      )
    })
    it('sort array desc', function () {
      assert.equal(
        JSON.stringify(xd.sortArr([2, 4, 3, 1], 'desc')),
        JSON.stringify([4, 3, 2, 1])
      )
    })
  })

  describe('#sortArrBy()', function () {
    it('sort array by specified field asc', function () {
      assert.equal(
        JSON.stringify(xd.sortArrBy([{a: 2}, {a: 4}, {a: 3}, {a: 1}], 'a')),
        JSON.stringify([{a: 1}, {a: 2}, {a: 3}, {a: 4}])
      )
    })
    it('sort array by specified field desc', function () {
      assert.equal(
        JSON.stringify(xd.sortArrBy([{a: 2}, {a: 4}, {a: 3}, {a: 1}], 'a', 'desc')),
        JSON.stringify([{a: 4}, {a: 3}, {a: 2}, {a: 1}])
      )
    })
  })

  describe('#getArrGreatestItem()', function () {
    it('get greatest item', function () {
      assert.equal(
        xd.getArrGreatestItem([1, 2, 3]),
        3
      )
    })
  })

  describe('#getArrLeastItem()', function () {
    it('get least item', function () {
      assert.equal(
        xd.getArrLeastItem([1, 2, 3]),
        1
      )
    })
  })

  describe('#getArrGreatestItemBy()', function () {
    it('get greatest item', function () {
      assert.equal(
        JSON.stringify(xd.getArrGreatestItemBy([{a: 1}, {a: 2}, {a: 3}], 'a')),
        JSON.stringify({a: 3})
      )
    })
  })

  describe('#getArrLeastItemBy()', function () {
    it('get least item', function () {
      assert.equal(
        JSON.stringify(xd.getArrLeastItemBy([{a: 1}, {a: 2}, {a: 3}], 'a')),
        JSON.stringify({a: 1})
      )
    })
  })

  describe('#getArrRepeatedItems()', function () {
    it('2 counts', function () {
      assert.equal(
        JSON.stringify(xd.getArrRepeatedItems([1, 2, 2], 2)),
        JSON.stringify([2])
      )
    })

    it('0 count', function () {
      assert.equal(
        JSON.stringify(xd.getArrRepeatedItems([1, 2, 2], 3)),
        JSON.stringify([])
      )
    })
  })

  describe('#uniqArr()', function () {
    it('array with unique items', function () {
      assert.equal(
        JSON.stringify(xd.uniqArr([1, 2, 2, 3])),
        JSON.stringify([1, 2, 3])
      )
    })
  })

  describe('#unionArr()', function () {
    it('union arrays', function () {
      assert.equal(
        JSON.stringify(xd.unionArr([1, 2], [2, 3])),
        JSON.stringify([1, 2, 3])
      )
    })
  })

  describe('#intersectArr()', function () {
    it('intersect arrays', function () {
      assert.equal(
        JSON.stringify(xd.intersectArr([1, 2, 3], [2, 3, 4])),
        JSON.stringify([2, 3])
      )
    })
  })

  describe('#complementArr()', function () {
    it('complement arrays', function () {
      assert.equal(
        JSON.stringify(xd.complementArr([1, 2, 3], [2, 3, 4])),
        JSON.stringify([1, 4])
      )
    })
  })

})
