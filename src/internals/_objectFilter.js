import curry2 from "../function/curry2";
import reduce from "../list/reduce";

const _objectFilter = (filterFn, object) =>
  reduce(
    (acc, curr, key, obj) => {
      if (filterFn(curr, key, obj)) {
        acc[key] = curr;
      }

      return acc;
    },
    {},
    object
  );

export default curry2(_objectFilter);
