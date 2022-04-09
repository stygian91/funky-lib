import curry3 from "../function/curry3";
import splice from "./splice";

/**
 * Inserts an element at the specified index, pushing the following elements back.
 *
 * @param {number} index
 * @param {any} value
 * @param {any[]} list
 */
const insert = (index, value, list) => splice(index, 0, [value], list);

export default curry3(insert);
