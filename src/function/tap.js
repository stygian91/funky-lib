import curry from "./curry";

/**
 * Runs a function on an argument and returns the argument.
 *
 * @param {function} func
 * @param {any} arg
 * @returns {any}
 */
const tap = (func, arg) => {
  func(arg);
  return arg;
};

export default curry(tap);
