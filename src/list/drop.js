import curry2 from "../function/curry2";
import splice from "./splice";

/**
 * Creates a new array with the element at the specified index removed.
 *
 * @param {number} index
 * @param {any[]} list
 * @returns {any[]}
 */
const drop = (index, list) => splice(index, 1, [], list);

export default curry2(drop);
