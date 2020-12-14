import curry2 from "../function/curry2";
import pathOr from "./pathOr";

/**
 * Returns the element at the specified path.
 * The path can be provided as a dot-separated string or as a list of strings.
 *
 * @param {string|string[]} path
 * @param {object} object
 * @returns {any}
 */
const path = (pathStr, object) => pathOr(void 0, pathStr, object);

export default curry2(path);
