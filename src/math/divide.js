const curry = require('../curry');

const divide = (divisor, divident) => {
  if (divisor === 0) {
    throw new Error('Divide by zero error');
  }

  return divident / divisor;
};

module.exports = curry(divide);
