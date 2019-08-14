const curry = require('../function/curry');

const reduce = (func, initialValue, list) => list.reduce(func, initialValue);

module.exports = curry(reduce);
