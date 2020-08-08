import reduceWhile from "./reduceWhile";
import { curry, identity } from "../function/";

/**
 * Checks if all elements of a list pass a condition.
 *
 * @param {function} condFn
 * @param {any[]} list
 * @returns {boolean}
 */
const all = (condFn, list) =>
  reduceWhile(
    identity,
    (acc, current, index, list) => acc && condFn(current, index, list),
    true,
    list
  );

export default curry(all);
