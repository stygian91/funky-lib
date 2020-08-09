import curry from "../function/curry";

/**
 * A curried version of the modulo `%` operator.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const modulo = (a, b) => {
  if (b === 0) {
    throw new Error("Modulo of 0 error.");
  }

  return a % b;
};

export default curry(modulo);
