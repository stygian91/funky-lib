import curry from '../function/curry';

const divide = (divident, divisor) => {
  if (divisor === 0) {
    throw new Error('Divide by zero error');
  }

  return divident / divisor;
};

export default curry(divide);
