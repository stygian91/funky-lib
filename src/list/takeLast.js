import curry2 from "../function/curry2";
import slice from "./slice";

/**
 * Similar to `take`, but takes elements from the end of the list.
 *
 * @see take
 * @param {number} numElements
 * @param {any[]} list
 * @returns {any[]}
 */
const takeLast = (numElements, list) =>
  slice(-1 * numElements, list.length, list);

export default curry2(takeLast);
