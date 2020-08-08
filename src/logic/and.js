import curry from "../function/curry";

/**
 * A curried wrapper around the `&&` operator.
 *
 * @param {any} a
 * @param {any} b
 * @return {any}
 */
const and = (a, b) => a && b;

export default curry(and);
