const curry = require('./curry');

const flip = func => (...args) => func(...args.reverse());

module.exports = curry(flip);
