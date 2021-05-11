import curry2 from "../function/curry2";
import objectWhile from "../internals/_objectWhile";
import isNil from "../logic/isNil";

/**
 * Returns the first element of a list that passes the condition function.
 *
 * @param {function} condFn
 * @param {any[]} list
 * @returns {any}
 */
const find = (condFn, list) => {
  if (Array.isArray(list)) {
    return list.find(condFn);
  }

  let foundKey;

  objectWhile(
    () => isNil(foundKey),
    (value, key, obj) => {
      if (condFn(value, key, obj)) {
        foundKey = key;
      }
    },
    list
  );

  return isNil(foundKey) ? null : list[foundKey];
};

export default curry2(find);
