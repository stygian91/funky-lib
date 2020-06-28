import curry from "../function/curry";
import findIndex from "./findIndex";
import equals from "../logic/equals";
import reduce from "./reduce";

const unique = (list) => {
  if (list.length < 2) {
    return list.slice();
  }

  return reduce(
    (acc, element) => {
      const foundIndex = findIndex(equals(element), acc);
      if (foundIndex === -1) {
        acc.push(element);
      }

      return acc;
    },
    [],
    list
  );
};

export default curry(unique);
