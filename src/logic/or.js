import curry2 from "../function/curry2";

/**
 * A curried wrapper around the `||` operator.
 *
 * @param {any} a
 * @param {any} b
 * @returns {any}
 */
const or = (a, b) => a || b;

export default curry2(or);
