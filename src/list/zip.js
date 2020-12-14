import curry2 from "../function/curry2";

/**
 * Creates a new list with pairs of values from the 2 lists,
 * where each pair consists of the element with the same index from each array.
 * If one list has more elements than the other,
 * then the pairing will be done up to the lenght of the shorter array.
 * The resulting array has the following format:
 * <pre>
 * [
 *   [list1el1, list2el1],
 *   [list1el2, list2el2],
 *   // ...
 * ]
 * </pre>
 *
 * @param {any[]} list1
 * @param {any[]} list2
 */
const zip = (list1, list2) => {
  const length = list1.length < list2.length ? list1.length : list2.length;

  const result = [];
  for (let index = 0; index < length; index++) {
    result.push([list1[index], list2[index]]);
  }

  return result;
};

export default curry2(zip);
