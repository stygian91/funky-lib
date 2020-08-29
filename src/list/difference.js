import differenceWith from "./differenceWith";
import { equals } from "../";
import { curry } from "../function";

/**
 * Returns a unique list of elements from list1 that are not present in list2.
 * Comparison is done using the `equals` function.
 *
 * @see differenceWith
 * @see equals
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {any[]}
 */
const difference = differenceWith(equals);

export default curry(difference);
