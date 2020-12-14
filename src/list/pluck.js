import map from "./map";
import pathFn from "../object/path";
import curry2 from "../function/curry2";

/**
 * Takes a list of objects and returns a new list with the values at the specified path plucked.
 * The path can be provided with a dot-separated string or a list of strings,
 * same as the `path*` functions.
 *
 * @see path
 * @param {string|string[]} path
 * @param {object[]} list
 * @returns {any[]}
 */
const pluck = (path, list) => map(pathFn(path), list);

export default curry2(pluck);
