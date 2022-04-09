import { forEach, findIndex } from "./";
import { curry3 } from "..";

/**
 * Returns the union of two lists.
 * Comparisson is done with the `equalsFn`,
 * which is given two elements and must return true if they are considered equal.
 *
 * @see union
 * @param {function} equalsFn
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {any[]}
 */
const unionWith = (equalsFn, list1, list2) => {
  const result = [];

  const appendItems = forEach((el) => {
    const index = findIndex((resEl) => equalsFn(resEl, el), result);
    if (index === -1) {
      result.push(el);
    }
  });

  appendItems(list1);
  appendItems(list2);

  return result;
};

export default curry3(unionWith);
