import { curry, size, slice } from "../";

/**
 * Returns all elements from a list or string, except the first one.
 *
 * @param {any[]|string} list
 * @returns {any[]|string}
 */
const tail = (list) => slice(1, size(list), list);

export default curry(tail);
