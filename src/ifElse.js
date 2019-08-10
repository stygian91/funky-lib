const curry = require('./curry');

const ifElse = (condition, then, otherwise) => condition ? then : otherwise;

module.exports = curry(ifElse);
