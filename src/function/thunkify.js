const curry = require('./curry');

const thunkify = func => (...args) => () => {
  return func(...args);
}

module.exports = curry(thunkify);
