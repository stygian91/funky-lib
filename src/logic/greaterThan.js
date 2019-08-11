const curry = require('../function/curry');

const greaterThan = (left, right) => left > right;

module.exports = curry(greaterThan);
