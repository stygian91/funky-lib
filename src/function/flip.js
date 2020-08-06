import curry from "./curry";

/**
 * Creates a new function that takes its arguments
 * in reverse order of the original function.
 *
 * @param {function} func
 */
const flip = (func) => (...args) => func(...args.reverse());

export default curry(flip);
