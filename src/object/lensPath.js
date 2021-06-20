import lens from "./lens";
import pathFn from "./path";
import assocPath from "./assocPath";
import curry1 from "../function/curry1";

/**
 * Creates a lens that will focus on a specific object path.
 * The path is specified the same way as in the `path` function.
 *
 * @param {string|string[]} path
 * @returns {object}
 * @see lens
 * @see path
 */
const lensPath = (path) => lens(pathFn(path), assocPath(path));

export default curry1(lensPath);
