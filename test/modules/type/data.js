const list = [
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

const funcs = [
  'isStr', 'isNum', 'isArr',
  'isObj', 'isFunc', 'isRegExp'
]

module.exports = {list, funcs}
