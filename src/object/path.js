import curry from "../function/curry";
import pathOr from "./pathOr";

/**
 * Returns the element at the specified path.
 * The path can be provided as a dot-separated string or as a list of strings.
 *
 * @param {string|string[]} path
 * @param {object} object
 * @returns {any}
 */
const path = (path, object) => pathOr(void 0, path, object);

export default curry(path);
