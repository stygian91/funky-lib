import _flatten from "../internals/_flatten";

/**
 * Removes one level of list nesting.
 *
 * @function
 * @name unnest
 * @see flatten
 * @param {any[]} list
 * @returns {any[]}
 */
const unnest = _flatten(false);

export default unnest;
