import curry2 from "../function/curry2";
import reduceWhile from "../list/reduceWhile";

/**
 * Checks if any of the functions pass (return a truthy value).
 * The list of arguments will be applied to each function in turn (`func(...args)`).
 *
 * @see allPass
 * @param {function[]} funcs
 * @param {any[]} args
 * @returns {boolean}
 */
const anyPass = (funcs, args) =>
  reduceWhile(
    (acc) => !acc,
    (acc, current) => acc || !!current(...args),
    false,
    funcs,
  );

export default curry2(anyPass);
