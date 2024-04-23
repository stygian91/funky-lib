import size from "./size";
import slice from "./slice";
import curry1 from "../function/curry1";

/**
 * Returns all elements from a list or string, except the first one.
 *
 * @param {any[]|string} list
 * @returns {any[]|string}
 */
const tail = (list) => slice(1, size(list), list);

export default curry1(tail);
