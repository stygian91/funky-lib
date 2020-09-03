import curry from "../function/curry";

/**
 * A curried wrapper around the `>` operator.
 *
 * @param {any} right
 * @param {any} left
 * @returns {boolean}
 */
const gt = (right, left) => left > right;

export default curry(gt);
