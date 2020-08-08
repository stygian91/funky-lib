import curry from "./curry";

/**
 * Applies a list of arguments to a function.
 * The `this` variable will be set to undefined for that function execution.
 *
 * @param {function} func
 * @param {any[]} args
 * @returns {any}
 */
const apply = (func, args) => {
  return func.apply(void 0, args);
};

export default curry(apply);
