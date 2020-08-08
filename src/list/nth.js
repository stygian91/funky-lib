import curry from "../function/curry";

/**
 * Returns the nth element of a list.
 *
 * @param {number} n
 * @param {any[]} list
 * @returns {any}
 */
const nth = (n, list) => {
  if (n >= 0) {
    return list[n];
  }

  return list[list.length + n];
};

export default curry(nth);
