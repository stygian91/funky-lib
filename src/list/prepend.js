import { insert } from "./";

/**
 * Prepends a value at the beginning of a list.
 *
 * @function
 * @name prepend
 * @param {any} value
 * @param {any[]} list
 * @returns {any[]}
 */
const prepend = insert(0);

export default prepend;
