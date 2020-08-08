import { curry } from "../function";

/**
 * Returns a list of numbers from the first argument(inclusive)
 * to the second argument(exclusive).
 *
 * @param {number} from
 * @param {number} to
 * @returns {number[]}
 */
const range = (from, to) => {
  const result = [];

  for (let i = from; i < to; i++) {
    result.push(i);
  }

  return result;
};

export default curry(range);
