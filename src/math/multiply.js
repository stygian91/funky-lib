import curry from "../function/curry";

/**
 * A curried version of the `*` operator.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const multiply = (a, b) => a * b;

export default curry(multiply);
