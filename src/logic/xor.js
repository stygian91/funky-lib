import curry from "../function/curry";

/**
 * A curried wrapper around the `^` operator.
 *
 * @param {any} a
 * @param {any} b
 */
const xor = (a, b) => a ^ b;

export default curry(xor);
