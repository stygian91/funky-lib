import { curry2 } from "../function";
import { size, insert } from "./";

/**
 * Appends a new element at the end of a list.
 *
 * @param {any} value
 * @param {any[]} list
 * @returns {any[]}
 */
const append = (value, list) => insert(size(list), value, list);

export default curry2(append);
