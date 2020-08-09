import pathFn from "./path";
import curry from "../function/curry";

/**
 * Checks if the value at the specified path passes the condition.
 * The path can be provided as a dot-separated string or a list of strings.
 *
 * @param {function} condFn
 * @param {string|string[]} path
 * @param {object} object
 * @returns {boolean}
 */
const pathSatisfies = (condFn, path, object) => !!condFn(pathFn(path, object));

export default curry(pathSatisfies);
