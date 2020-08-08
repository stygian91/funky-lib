import curry from "../function/curry";

/**
 * A curried wrapper around the `<=` operator.
 *
 * @param {any} left
 * @param {any} right
 * @returns {boolean}
 */
const lte = (left, right) => left <= right;

export default curry(lte);
