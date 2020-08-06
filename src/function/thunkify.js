import curry from "./curry";

/**
 * Returns a new function that delays execution by returning a nullary function.
 *
 * @param {function} func
 * @returns {function}
 */
const thunkify = (func) => (...args) => () => func(...args);

export default curry(thunkify);
