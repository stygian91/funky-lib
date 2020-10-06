import { curry } from "../function";
import { unfold } from "../list";
import { inRange } from "../math";

/**
 * Returns a list of numbers from the first argument(inclusive)
 * to the second argument(exclusive).
 *
 * @function
 * @param {number} from
 * @param {number} to
 * @returns {number[]}
 */
const range = (from, to) =>
  unfold((seed) => (inRange(from, to, seed) ? [seed, seed + 1] : false), from);

export default curry(range);
