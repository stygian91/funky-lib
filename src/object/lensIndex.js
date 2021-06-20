import lens from "./lens";
import nth from "../list/nth";
import update from "../list/update";
import curry1 from "../function/curry1";

/**
 * Creates a lens that will focus on a specific list index.
 *
 * @param {integer} index
 * @returns {object}
 * @see lens
 */
const lensIndex = (index) => lens(nth(index), update(index));

export default curry1(lensIndex);
