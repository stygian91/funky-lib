const curry = require('../curry');

const subtract = (b, a) => a - b;

module.exports = curry(subtract);
