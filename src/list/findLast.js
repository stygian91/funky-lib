import curry from "../function/curry";
import findLastIndex from "./findLastIndex";

/**
 * Returns the last element in the list that pases the condition function.
 *
 * @see find
 * @param {function} condFn
 * @param {any[]} list
 * @returns {any}
 */
const findLast = (condFn, list) => {
  const index = findLastIndex(condFn, list);
  return index === -1 ? void 0 : list[index];
};

export default curry(findLast);
