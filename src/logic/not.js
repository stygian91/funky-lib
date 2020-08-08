import curry from "../function/curry";

/**
 * A curried wrapper around the `!` operator.
 *
 * @param {any} arg
 * @returns {boolean}
 */
const not = (arg) => !arg;

export default curry(not);
