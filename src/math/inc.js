import curry from "../function/curry";

/**
 * Increments a number.
 *
 * @param {number} number
 * @returns {number}
 */
const inc = (num) => num + 1;

export default curry(inc);
