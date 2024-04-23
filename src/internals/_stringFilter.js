import curry2 from "../function/curry2";
import reduce from "../list/reduce";

const _stringFilter = (filterFn, string) =>
  reduce(
    (acc, curr, index, str) => {
      if (filterFn(curr, index, str)) {
        acc += curr;
      }

      return acc;
    },
    "",
    string,
  );

export default curry2(_stringFilter);
