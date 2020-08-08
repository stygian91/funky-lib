import curry from "../function/curry";

/**
 * Returns a new array with the element at the provided index
 * updated by the transformation function.
 *
 * @param {number} index
 * @param {function} transformFn
 * @param {any[]} list
 * @returns {any[]}
 */
const adjust = (index, transformFn, list) => {
  const _index = index >= 0 ? index : list.length + index;
  const newList = list.slice();
  newList[_index] = transformFn(newList[_index]);
  return newList;
};

export default curry(adjust);
