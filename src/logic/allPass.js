import curry from "../function/curry";
import reduceWhile from "../list/reduceWhile";
import identity from "../function/identity";

/**
 * Checks if all functions pass (return a truthy value).
 * The list of arguments will be applied to each function in turn (`func(...args)`).
 *
 * @see anyPass
 * @param {function[]} functions
 * @param {any[]} args
 * @returns {boolean}
 */
const allPass = (funcs, args) =>
  reduceWhile(
    identity,
    (acc, current) => acc && !!current(...args),
    true,
    funcs
  );

export default curry(allPass);
