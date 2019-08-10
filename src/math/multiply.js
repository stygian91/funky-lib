const curry = require('../function/curry');

const multiply = (termToMultiply, term) => term * termToMultiply;

module.exports = curry(multiply);
