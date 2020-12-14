import curry2 from "../function/curry2";
import _objectForEach from "./_objectForEach";

const _objectMap = (func, object) => {
  const result = {};

  const iterationFn = (element, key, obj) => {
    result[key] = func(element, key, obj);
  };

  _objectForEach(iterationFn, object);

  return result;
};

export default curry2(_objectMap);
