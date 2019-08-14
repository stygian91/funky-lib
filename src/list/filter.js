const curry = require('../function/curry');

const filter = (func, list) => list.filter(func);

module.exports = curry(filter);
