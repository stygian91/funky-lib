import { curry } from "../";

/**
 * Checks if the list includes `element`, starting from `fromIndex`.
 * Defers to [Array.prototype.includes]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes}
 *
 * @param {any} element
 * @param {number} fromIndex
 * @param {any[]} list
 * @returns {boolean}
 */
const includes = (element, fromIndex, list) =>
  list.includes(element, fromIndex);

export default curry(includes);
