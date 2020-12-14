import _keys from "../internals/_keys";
import curry1 from "../function/curry1";

/**
 * Returns all own enumerable property names and symbols.
 *
 * @function
 * @name keys
 * @param {object} obj
 * @returns {any[]}
 */
export default curry1(_keys);
