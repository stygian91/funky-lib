const curry = require('../function/curry');

const subtract = (b, a) => a - b;

module.exports = curry(subtract);
