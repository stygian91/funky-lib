import map from "../list/map";
import curry from "./curry";

/**
 * Takes a list of functions and a converging function.
 * Returns a new function that takes a variable number of arguments,
 * which will be applied to each of the branching functions.
 * The results of the branching functions will be passed to the converging function.
 *
 * @param {function} convergingFn
 * @param {function[]} branchingFns
 * @returns {function}
 */
const converge = (convergingFn, branchingFns) => (...args) => {
  const branchResults = map(
    (branchingFn) => branchingFn(...args),
    branchingFns
  );
  return convergingFn(...branchResults);
};

export default curry(converge);
