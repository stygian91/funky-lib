import curry1 from "./curry1";

/**
 * Returns a new function that delays execution by returning a nullary function.
 *
 * @param {function} func
 * @returns {function}
 */
const thunkify = (func) => (...args) => () => func(...args);

export default curry1(thunkify);
