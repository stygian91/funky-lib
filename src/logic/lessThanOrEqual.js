import curry2 from "../function/curry2";

/**
 * A curried wrapper around the `<=` operator.
 *
 * @param {any} right
 * @param {any} left
 * @returns {boolean}
 */
const lte = (right, left) => left <= right;

export default curry2(lte);
