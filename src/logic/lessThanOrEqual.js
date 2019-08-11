const curry = require('../function/curry');

const lte = (left, right) => left <= right;

module.exports = curry(lte);
