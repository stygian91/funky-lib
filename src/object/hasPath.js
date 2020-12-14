import curry2 from "../function/curry2";
import pathFn from "./path";

/**
 * Checks if a prop at at the given path exists.
 * The path can be given as a dot-separated string or a list of strings.
 *
 * @param {string|string[]} path
 * @param {object} object
 * @returns {boolean}
 */
const hasPath = (path, object) => pathFn(path, object) !== undefined;

export default curry2(hasPath);
