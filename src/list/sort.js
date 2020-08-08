import curry from "../function/curry";

/**
 * Returns a new list that's sorted according to the predicate.
 * Uses [Array.prototype.sort]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
 * for the sorting, please refer to its documentation for the arguments that the predicate receives.
 * Note however that the sorting is done on a shallow copy of the original list.
 *
 * @param {function} predicate
 * @param {any[]} list
 * @returns {any[]}
 */
const sort = (predicate, list) => list.slice().sort(predicate);

export default curry(sort);
