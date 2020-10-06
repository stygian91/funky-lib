import curry from "../function/curry";

/**
 * Decrements a number.
 *
 * @param {number} num
 * @returns {number}
 */
const dec = (num) => num - 1;

export default curry(dec);
