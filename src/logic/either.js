import curry from "../function/curry";
import { anyPass } from "./";

/**
 * Returns true if either one of the functions returns a truthy value with the provided arguments.
 * The arguments are applied to each function in turn(`func(...args)`).
 *
 * @param {function} f1
 * @param {function} f2
 * @param {any[]} args
 * @returns {boolean}
 */
const either = (f1, f2, args) => anyPass([f1, f2], args);

export default curry(either);
