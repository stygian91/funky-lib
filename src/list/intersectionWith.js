import { curry } from "../";
import filter from "./filter";
import findIndex from "./findIndex";

/**
 * Finds the intersection of two lists.
 * Uniqueness is determined by the `equalsFn`,
 * which takes an element from each list
 * and must return true if the two elements are considered equal.
 *
 * @see intersection
 * @param {function} equalsFn
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {any[]}
 */
const intersectionWith = (equalsFn, list1, list2) =>
  filter((el) => findIndex((el2) => equalsFn(el, el2), list2) !== -1, list1);

export default curry(intersectionWith);
