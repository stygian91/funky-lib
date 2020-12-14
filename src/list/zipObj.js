import curry2 from "../function/curry2";

/**
 * Similar to `zip`, but the elements of the first list are used for keys
 * and the values of the second list are used as values for the resulting object.
 * The format of the resulting object is the following:
 * <pre>
 * {
 *   [list1el1]: list2el1,
 *   [list1el2]: list2el2,
 *   // ...
 * }
 * </pre>
 *
 * @see zip
 * @param {any[]} keys
 * @param {any[]} values
 * @returns {object}
 */
const zipObj = (keys, values) => {
  const length = keys.length < values.length ? keys.length : values.length;

  const result = {};
  for (let index = 0; index < length; index++) {
    result[keys[index]] = values[index];
  }
  return result;
};

export default curry2(zipObj);
