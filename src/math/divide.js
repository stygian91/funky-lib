import curry from "../function/curry";

/**
 * A curried version of the `/` operator.
 * Throws an error when trying to divide by zero.
 *
 * @param {number} divisor
 * @param {number} divident
 * @returns {number}
 */
const divide = (divisor, divident) => {
  if (divisor === 0) {
    throw new Error("Divide by zero error");
  }

  return divident / divisor;
};

export default curry(divide);
