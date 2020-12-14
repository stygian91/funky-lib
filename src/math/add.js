import curry2 from "../function/curry2";

/**
 * A curried version of the `+` operator.
 *
 * @param {any} a
 * @param {any} b
 * @returns {any}
 */
const add = (a, b) => a + b;

export default curry2(add);
