import { forEach } from ".";
import { curry2 } from "../function";

/**
 * Creates an object whose keys are determined by `keyFn`.
 * Each element of the list will be assigned in the object based on the key generated.
 * If the key function returns the same values for 2 elements from the list,
 * the one that's later in the list will overwrite the earlier one.
 * This function is useful if you have an array of objects that you want to convert to an object.
 *
 * @param {function} keyFn
 * @param {any[]} list
 * @returns {object}
 */
const keyWith = (keyFn, list) => {
  const object = {};

  forEach((value, index, ls) => {
    object[keyFn(value, index, ls)] = value;
  }, list);

  return object;
};

export default curry2(keyWith);
