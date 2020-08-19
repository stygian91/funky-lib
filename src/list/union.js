import unionWith from "./unionWith";
import { equals } from "..";

/**
 * Returns the union of the two lists.
 * Uses the `equals` function to compare if two values are equal.
 *
 * @function
 * @name union
 * @see unionWith
 * @see equals
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {any[]}
 */
const union = unionWith(equals);

export default union;
