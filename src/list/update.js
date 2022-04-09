import { curry3, always } from "../function";
import adjust from "./adjust";

/**
 * Returns a new array with the value at the specified index updated.
 *
 * @param {integer} index
 * @param {any} value
 * @param {any[]} list
 */
const update = (index, value, list) => adjust(index, always(value), list);

export default curry3(update);
