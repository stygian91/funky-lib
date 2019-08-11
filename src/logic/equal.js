const curry = require('../function/curry');

const equal = (left, right) => left === right;

module.exports = curry(equal);
