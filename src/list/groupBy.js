import curry from "../function/curry";

/**
 * Groups the elements of a list into an object
 * where the group of each element is determined by the grouping/key function.
 * The resulting object has the following format:
 * <pre>
 * {
 *   "group1": [el, el2, el3], // elements for which `groupFn` returned `group1`
 *   "group2": [el4, el5], // elements for which `groupFn` returned `group2`
 *   // ...
 * }
 * </pre>
 *
 * @param {function} groupFn
 * @param {any[]} list
 * @returns {object}
 */
const groupBy = (groupFn, list) => {
  const result = {};

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    const key = groupFn(element, index);

    if (!result.hasOwnProperty(key)) {
      result[key] = [];
    }

    result[key].push(element);
  }

  return result;
};

export default curry(groupBy);
