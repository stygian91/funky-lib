const curry = require('../function/curry');

const unless = (conditionFn, elseFn) => (arg) => conditionFn(arg) ? arg : elseFn(arg);

module.exports = curry(unless);
