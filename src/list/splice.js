import curry from "../function/curry";

/**
 * Creates a shallow copy of the list and splices it,
 * deleting `deleteCount` items at the specified index (can be zero),
 * and inserting `newElements` in that place.
 * Notice that `newElements` can also be an empty list.
 * Unlike `Array.prototype.splice`, it receives its new elements as a list instead of
 * [Rest parameters]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters}
 *
 * Reference: [Array.prototype.splice]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice}
 *
 * @param {number} index
 * @param {number} deleteCount
 * @param {any[]} newElements
 * @param {any[]} list
 * @returns {any[]}
 */
const splice = (index, deleteCount, newElements, list) => {
  const clone = list.slice();
  clone.splice(index, deleteCount, ...newElements);
  return clone;
};

export default curry(splice);
