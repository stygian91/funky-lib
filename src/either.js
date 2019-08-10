const curry = require('./curry');

const either = (f1, f2) => (...args) => f1(...args) || f2(...args);

module.exports = curry(either);
