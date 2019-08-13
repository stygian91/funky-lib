const curry = require('../function/curry');

const ifElse = (conditionPredicate, then, otherwise) => (arg) => conditionPredicate(arg) ? then : otherwise;

module.exports = curry(ifElse);
