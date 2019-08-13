const curry = require('../function/curry');

const ifElse = (conditionFn, thenFn, otherwiseFn) => (...args) => conditionFn(...args) ? thenFn(...args) : otherwiseFn(...args);

module.exports = curry(ifElse);
