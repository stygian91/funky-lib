import { curry } from "../function";

/**
 * Finds the index of the first match, or -1 if there's no match.
 *
 * @param {string} search
 * @param {integer} fromIndex
 * @param {string} str
 * @returns {number}
 */
const indexOf = (search, fromIndex, str) => str.indexOf(search, fromIndex);

export default curry(indexOf);
