import curry1 from "./curry1";

/**
 * Creates a new function that takes its arguments
 * in reverse order of the original function.
 *
 * @param {function} func
 */
const flip = (func) => (...args) => func(...args.reverse());

export default curry1(flip);
