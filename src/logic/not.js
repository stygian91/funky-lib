import curry1 from "../function/curry1";

/**
 * A curried wrapper around the `!` operator.
 *
 * @param {any} arg
 * @returns {boolean}
 */
const not = (arg) => !arg;

export default curry1(not);
