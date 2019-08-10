const curry = require('../function/curry');

const ifElse = (condition, then, otherwise) => condition ? then : otherwise;

module.exports = curry(ifElse);
