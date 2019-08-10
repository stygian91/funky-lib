const curry = require('../curry');

const multiply = (termToMultiply, term) => term * termToMultiply;

module.exports = curry(multiply);
