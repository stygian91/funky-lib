import curry from "../function/curry";

/**
 * A curried wrapper around the `||` operator.
 *
 * @param {any} a
 * @param {any} b
 * @returns {any}
 */
const or = (a, b) => a || b;

export default curry(or);
