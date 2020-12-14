import curry2 from "./curry2";

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

export default curry2(tap);
