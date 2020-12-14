import _objectForEach from "./_objectForEach";
import curry2 from "../function/curry2";

const _objectFilter = (filterFn, object) => {
  const result = {};

  const iterationFn = (value, key, obj) => {
    if (!filterFn(value, key, obj)) {
      return;
    }

    result[key] = value;
  };

  _objectForEach(iterationFn, object);

  return result;
};

export default curry2(_objectFilter);
