const curry = require('../function/curry');

const both = (f1, f2) => (...args) => f1(...args) && f2(...args);

module.exports = curry(both);
