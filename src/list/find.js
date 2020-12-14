import curry2 from "../function/curry2";

/**
 * Returns the first element of a list that passes the condition function.
 *
 * @param {function} condFn
 * @param {any[]} list
 * @returns {any}
 */
const find = (condFn, list) => list.find(condFn);

export default curry2(find);
