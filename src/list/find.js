import curry from "../function/curry";

/**
 * Returns the first element of a list that passes the condition function.
 *
 * @param {function} condFn
 * @param {any[]} list
 * @returns {any}
 */
const find = (condFn, list) => list.find(condFn);

export default curry(find);
