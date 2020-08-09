import curry from "../function/curry";

/**
 * A curried version of the `/` operator.
 * Throws an error when trying to divide by zero.
 *
 * @param {number} divident
 * @param {number} divisor
 * @returns {number}
 */
const divide = (divident, divisor) => {
  if (divisor === 0) {
    throw new Error("Divide by zero error");
  }

  return divident / divisor;
};

export default curry(divide);
