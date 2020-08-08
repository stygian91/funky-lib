import curry from "../function/curry";
import findIndex from "./findIndex";
import equals from "../logic/equals";
import reduce from "./reduce";

/**
 * Returns a new list with duplicate values removed.
 * The comparison is done with the `equals` function.
 *
 * @see equals
 * @param {any[]} list
 * @returns {any[]}
 */
const unique = (list) => {
  if (list.length < 2) {
    return list.slice();
  }

  return reduce(
    (acc, element) => {
      if (findIndex(equals(element), acc) === -1) {
        acc.push(element);
      }

      return acc;
    },
    [],
    list
  );
};

export default curry(unique);
