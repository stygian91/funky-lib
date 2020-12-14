import curry2 from "../function/curry2";

/**
 * Returns the index of the first element that
 * passes the condition function or -1 if no element is found.
 *
 * @param {function} condFn
 * @param {any[]} list
 * @returns {number}
 */
const findIndex = (condFn, list) => {
  for (let index = 0; index < list.length; index++) {
    const value = list[index];
    if (condFn(value, index, list)) {
      return index;
    }
  }

  return -1;
};

export default curry2(findIndex);
