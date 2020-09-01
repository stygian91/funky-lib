import curry from "../function/curry";

/**
 * A curried version of the modulo `%` operator (a % b).
 *
 * @param {number} b
 * @param {number} a
 * @returns {number}
 */
const modulo = (b, a) => {
  if (b === 0) {
    throw new Error("Modulo of 0 error.");
  }

  return a % b;
};

export default curry(modulo);
