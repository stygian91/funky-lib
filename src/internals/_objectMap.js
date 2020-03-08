import curry from "../function/curry";
import _objectForEach from "./_objectForEach";

const _objectMap = (func, object) => {
  const result = {};

  const iterationFn = (element, key, object) => {
    result[key] = func(element, key, object);
  };

  _objectForEach(iterationFn, object);

  return result;
};

export default curry(_objectMap);
