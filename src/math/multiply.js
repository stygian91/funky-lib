import curry2 from "../function/curry2";

/**
 * A curried version of the `*` operator.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const multiply = (a, b) => a * b;

export default curry2(multiply);
