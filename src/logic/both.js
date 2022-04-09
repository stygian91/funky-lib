import curry3 from "../function/curry3";
import { allPass } from "./";

/**
 * Checks if both functions return a truthy value.
 * The arguments are applied to each function in turn (`func(...args)`).
 *
 * @see allPass
 * @param {function} f1
 * @param {function} f2
 * @param {any[]} args
 * @returns {boolean}
 */
const both = (f1, f2, args) => allPass([f1, f2], args);

export default curry3(both);
