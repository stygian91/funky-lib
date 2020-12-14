import size from "../list/size";
import { curry1 } from "../function";

/**
 * Checks if the value is empty.
 * Empty values are `[]`, `{}` and `''`.
 *
 * @param {any} arg
 * @returns {boolean}
 */
const isEmpty = (arg) => {
  try {
    return size(arg) === 0;
  } catch (e) {
    return false;
  }
};

export default curry1(isEmpty);
