const pipe = require('./pipe');

const compose = (...funcs) => pipe(...funcs.reverse());

module.exports = compose;
