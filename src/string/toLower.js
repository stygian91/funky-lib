import { curry1 } from "../function";

/**
 * Converts a string to lower case.
 *
 * @param {string} str
 * @returns {string}
 */
const toLower = (str) => str.toLowerCase();

export default curry1(toLower);
