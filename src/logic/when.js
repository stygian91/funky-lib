const curry = require('../function/curry');

const when = (conditionFn, thenFn) => (arg) => conditionFn(arg) ? thenFn(arg) : arg;

module.exports = curry(when);
