const curry = require('../function/curry');

const complement = (func) => (...args) => func(...args) ? false : true;

module.exports = curry(complement);
