const curry = require('../function/curry');

const map = (func, list) => list.map(func);

module.exports = curry(map);
