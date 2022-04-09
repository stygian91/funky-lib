import { forEach, findIndex } from "./";
import { curry3 } from "..";

/**
 * Returns a unique list of elements from list1 that are not present in list2.
 * Comparison is done using the binary function argument - `equalsFn`.
 *
 * @see difference
 * @param {function} equalsFn
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {any[]}
 */
const differenceWith = (equalsFn, list1, list2) => {
  const result = [];

  forEach((el) => {
    const resIndex = findIndex((resEl) => equalsFn(resEl, el), result);
    const listIndex = findIndex((el2) => equalsFn(el2, el), list2);
    if (resIndex === -1 && listIndex === -1) {
      result.push(el);
    }
  }, list1);

  return result;
};

export default curry3(differenceWith);
