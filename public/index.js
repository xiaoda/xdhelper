import xd from '../src'

let custom = (num, times) => num * times

xd.chain(2, 'multiply1k', [custom, 2])
