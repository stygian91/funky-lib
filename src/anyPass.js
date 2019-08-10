const curry = require('./curry');

const anyPass = (...funcs) => (...args) => funcs.reduce((accumulator, current) => accumulator || current(...args), false);

module.exports = curry(anyPass);
