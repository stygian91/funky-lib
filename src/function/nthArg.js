import curry from "./curry";

/**
 * Takes an index and returns a function
 * that will return the argument with that index.
 * If the index is negative, then the argument will
 * be returned from the end of the argument list,
 * where -1 is the last argument.
 *
 * @param {number} index
 * @returns {function}
 */
const nthArg = (index) => (...args) => {
  if (index >= 0) {
    return args[index];
  }

  return args[args.length + index];
};

export default curry(nthArg);
