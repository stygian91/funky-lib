const curry = require('../function/curry');

const add = (a, b) => a + b;

module.exports = curry(add);
