import curry from "../function/curry";
import filter from "./filter";
import equals from "../logic/equals";
import findIndex from "./findIndex";

/**
 * Finds the intersection of two lists.
 * Uses the `equals` function for comparison.
 *
 * @see equals
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {any[]}
 */
const intersection = (list1, list2) =>
  filter((el) => findIndex(equals(el), list2) !== -1, list1);

export default curry(intersection);
