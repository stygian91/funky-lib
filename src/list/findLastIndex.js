import curry from "../function/curry";

/**
 * Finds the index of the last element that passes the condition function.
 * Retruns -1 if no element matches the condition.
 *
 * @see findIndex
 * @param {function} condFn
 * @param {any[]} list
 * @returns {number}
 */
const findLastIndex = (condFn, list) => {
  for (let index = list.length; index >= 0; index--) {
    const value = list[index];
    if (condFn(value, index, list)) {
      return index;
    }
  }

  return -1;
};

export default curry(findLastIndex);
