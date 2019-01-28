const assert = require('assert')
const xd = require('../../../')

describe('xdArray', () => {

  describe('#isArrEmpty()', () => {
    it('array empty', () => {
      assert.equal(
        xd.isArrEmpty([]),
        true
      )
    })
    it('array not empty', () => {
      assert.equal(
        xd.isArrEmpty([1, 2]),
        false
      )
    })
  })

  describe('#isArrEqual()', () => {
    it('arrays equal', () => {
      assert.equal(
        xd.isArrEqual([1, 2], [1, 2]),
        true
      )
    })
    it('arrays not equal', () => {
      assert.equal(
        xd.isArrEqual([1, 2], [3, 4]),
        false
      )
    })
  })

  describe('#cloneArr()', () => {
    it('clone array', () => {
      assert.equal(
        xd.isArrEqual([1, 2], xd.cloneArr([1, 2])),
        true
      )
    })
  })

  describe('#countArrItem()', () => {
    it('0 count', () => {
      assert.equal(
        xd.countArrItem([1, 2, 2], 3),
        0
      )
    })
    it('2 counts', () => {
      assert.equal(
        xd.countArrItem([1, 2, 2], 2),
        2
      )
    })
  })

  describe('#addArrUniqItem()', () => {
    it('add item', () => {
      assert.equal(
        xd.isArrEqual(xd.addArrUniqItem([1, 2], 3), [1, 2, 3]),
        true
      )
    })
    it('not add item', () => {
      assert.equal(
        xd.isArrEqual(xd.addArrUniqItem([1, 2], 2), [1, 2]),
        true
      )
    })
  })

  describe('#removeArrItem()', () => {
    it('remove item', () => {
      assert.equal(
        xd.isArrEqual(xd.removeArrItem([1, 2, 3], [1, 3]), [2]),
        true
      )
    })
    it('not remove item', () => {
      assert.equal(
        xd.isArrEqual(xd.removeArrItem([1, 2, 3], 4), [1, 2, 3]),
        true
      )
    })
  })

  describe('#toggleArrItem()', () => {
    it('add item', () => {
      assert.equal(
        xd.isArrEqual(xd.toggleArrItem([1, 2], 3), [1, 2, 3]),
        true
      )
    })
    it('remove item', () => {
      assert.equal(
        xd.isArrEqual(xd.toggleArrItem([1, 2, 3], 3), [1, 2]),
        true
      )
    })
  })

  describe('#getArrFirstItem()', () => {
    it('first item', () => {
      assert.equal(
        xd.getArrFirstItem([1, 2, 3]),
        1
      )
    })
    it('first 2 items', () => {
      assert.equal(
        xd.isArrEqual(xd.getArrFirstItem([1, 2, 3], 2), [1, 2]),
        true
      )
    })
  })

  describe('#getArrLastItem()', () => {
    it('last item', () => {
      assert.equal(
        xd.getArrLastItem([1, 2, 3]),
        3
      )
    })
    it('last 2 items', () => {
      assert.equal(
        xd.isArrEqual(xd.getArrLastItem([1, 2, 3], 2), [2, 3]),
        true
      )
    })
  })

  describe('#getArrGreatestItem()', () => {
    it('greatest item', () => {
      assert.equal(
        xd.getArrGreatestItem([1, 2, 3]),
        3
      )
    })
    it('greatest 2 items', () => {
      assert.equal(
        xd.isArrEqual(xd.getArrGreatestItem([1, 2, 3], 2), [3, 2]),
        true
      )
    })
  })

  describe('#getArrLeastItem()', () => {
    it('least item', () => {
      assert.equal(
        xd.getArrLeastItem([1, 2, 3]),
        1
      )
    })
    it('least 2 items', () => {
      assert.equal(
        xd.isArrEqual(xd.getArrLeastItem([1, 2, 3], 2), [1, 2]),
        true
      )
    })
  })

  describe('#getArrGreatestItemBy()', () => {
    it('greatest item', () => {
      assert.equal(
        xd.isObjEqual(
          xd.getArrGreatestItemBy([{a: 1}, {a: 2}, {a: 3}], 'a'),
          {a: 3}
        ),
        true
      )
    })
    it('greatest 2 items', () => {
      assert.equal(
        xd.isArrEqual(
          xd.getArrGreatestItemBy([{a: 1}, {a: 2}, {a: 3}], 'a', 2),
          [{a: 3}, {a: 2}]
        ),
        true
      )
    })
  })

  describe('#getArrLeastItemBy()', () => {
    it('least item', () => {
      assert.equal(
        xd.isObjEqual(
          xd.getArrLeastItemBy([{a: 1}, {a: 2}, {a: 3}], 'a'),
          {a: 1}
        ),
        true
      )
    })
    it('least 2 items', () => {
      assert.equal(
        xd.isArrEqual(
          xd.getArrLeastItemBy([{a: 1}, {a: 2}, {a: 3}], 'a', 2),
          [{a: 1}, {a: 2}]
        ),
        true
      )
    })
  })

  describe('#getArrRepeatedItem()', () => {
    it('0 count', () => {
      assert.equal(
        xd.isArrEqual(xd.getArrRepeatedItem([1, 2, 2], 3), []),
        true
      )
    })
    it('2 counts', () => {
      assert.equal(
        xd.isArrEqual(xd.getArrRepeatedItem([1, 2, 2], 2), [2]),
        true
      )
    })
    it('functions', () => {
      assert.equal(
        xd.isArrEqual(xd.getArrRepeatedItem([1, 2, 2], (times) => times > 1), [2]),
        true
      )
    })
  })

  describe('#uniqArr()', () => {
    it('array with unique items', () => {
      assert.equal(
        xd.isArrEqual(
          xd.uniqArr([1, 2, 2, 3]),
          [1, 2, 3]
        ),
        true
      )
    })
  })

  describe('#unionArr()', () => {
    it('union arrays', () => {
      assert.equal(
        xd.isArrEqual(
          xd.unionArr([1, 2], [2, 3]),
          [1, 2, 3]
        ),
        true
      )
    })
  })

  describe('#intersectArr()', () => {
    it('intersect arrays', () => {
      assert.equal(
        xd.isArrEqual(
          xd.intersectArr([1, 2, 3], [2, 3, 4]),
          [2, 3]
        ),
        true
      )
    })
  })

  describe('#sortArr()', () => {
    it('sort array asc', () => {
      assert.equal(
        xd.isArrEqual(
          xd.sortArr([2, 4, 3, 1]),
          [1, 2, 3, 4]
        ),
        true
      )
    })
    it('sort array desc', () => {
      assert.equal(
        xd.isArrEqual(
          xd.sortArr([2, 4, 3, 1], 'desc'),
          [4, 3, 2, 1]
        ),
        true
      )
    })
  })

  describe('#sortArrBy()', () => {
    it('sort array by field asc', () => {
      assert.equal(
        xd.isArrEqual(
          xd.sortArrBy([{a: 2}, {a: 4}, {a: 3}, {a: 1}], 'a'),
          [{a: 1}, {a: 2}, {a: 3}, {a: 4}]
        ),
        true
      )
    })
    it('sort array by field desc', () => {
      assert.equal(
        xd.isArrEqual(
          xd.sortArrBy([{a: 2}, {a: 4}, {a: 3}, {a: 1}], 'a', 'desc'),
          [{a: 4}, {a: 3}, {a: 2}, {a: 1}]
        ),
        true
      )
    })
  })

})
