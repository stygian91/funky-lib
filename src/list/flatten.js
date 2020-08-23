import _flatten from "../internals/_flatten";

/**
 * Returns a new list with all nested arrays flattened.
 *
 * @function
 * @name flatten
 * @see unnest
 * @param {any[]} list
 * @returns {any[]}
 */
const flatten = _flatten(true);

export default flatten;
