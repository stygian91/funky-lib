const curry = require('./curry');

const allPass = (...funcs) => (...args) => funcs.reduce((accumulator, current) => accumulator && current(...args), true);

module.exports = curry(allPass);
