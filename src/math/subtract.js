import curry2 from "../function/curry2";

/**
 * A curried version of the `-` operator.
 *
 * @param {number} b
 * @param {number} a
 * @returns {number}
 */
const subtract = (b, a) => a - b;

export default curry2(subtract);
