const curry = require('../function/curry');

const lt = (left, right) => left < right;

module.exports = curry(lt);
