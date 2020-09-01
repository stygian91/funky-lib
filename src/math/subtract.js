import curry from "../function/curry";

/**
 * A curried version of the `-` operator.
 *
 * @param {number} b
 * @param {number} a
 * @returns {number}
 */
const subtract = (b, a) => a - b;

export default curry(subtract);
