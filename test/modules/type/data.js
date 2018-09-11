const list = [
  {value: true, type: 'boolean', isBool: true, isDef: true},
  {value: 'string', type: 'string', isStr: true, isDef: true},
  {value: 1, type: 'number', isNum: true, isDef: true},
  {value: Infinity, type: 'infinity', isInfinity: true, isDef: true},
  {value: new Date(), type: 'date', isDate: true, isDef: true},
  {value: /a-z0-9/, type: 'regexp', isReg: true, isDef: true},
  {value: null, type: 'null', isNull: true, isDef: true},
  {value: {a: 1, b: 2}, type: 'object', isObj: true, isDef: true},
  {value: [1, 2], type: 'array', isArr: true, isDef: true},
  {value: () => {}, type: 'function', isFunc: true, isDef: true},
  {value: undefined, type: 'undefined', isUndef: true},
]

const funcs = [
  'isBool',
  'isStr',
  'isNum',
  'isInfinity',
  'isDate',
  'isReg',
  'isNull',
  'isObj',
  'isArr',
  'isFunc',
  'isDef',
  'isUndef',
]

module.exports = {list, funcs}
