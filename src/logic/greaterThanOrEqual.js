const curry = require('../function/curry');

const gte = (left, right) => left >= right;

module.exports = curry(gte);
