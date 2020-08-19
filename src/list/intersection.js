import curry from "../function/curry";
import equals from "../logic/equals";
import intersectionWith from "./intersectionWith";

/**
 * Finds the intersection of two lists.
 * Uses the `equals` function for comparison.
 *
 * @function
 * @name intersection
 * @see equals
 * @see intersectionWith
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {any[]}
 */
const intersection = intersectionWith(equals);

export default curry(intersection);
