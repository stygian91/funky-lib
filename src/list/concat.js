import curry2 from "../function/curry2";

/**
 * Concatenates 2 strings or 2 arrays.
 *
 * @param {string|array} left
 * @param {string|array} right
 * @returns {string|array}
 */
const concat = (left, right) => {
  if (
    !(Array.isArray(left) && Array.isArray(right)) &&
    !(typeof left === "string" && typeof right === "string")
  ) {
    throw new Error("Arguments must be either both arrays or both strings.");
  }

  return left.concat(right);
};

export default curry2(concat);
