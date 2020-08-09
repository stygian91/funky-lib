import { curry } from "../";

/**
 * Checks if the list includes `element, starting from `fromIndex`.
 * Defers to [Array.prototype.includes]{}
 *
 * @param {any} element
 * @param {number} fromIndex
 * @param {any[]} list
 * @returns {boolean}
 */
const includes = (element, fromIndex, list) =>
  list.includes(element, fromIndex);

export default curry(includes);
