import curry from "../function/curry";
import _objectWhile from "./_objectWhile";
import always from "../function/always";

const _objectReduce = (reducer, initialValue, object) => {
  let accumulator = initialValue;

  const iterationFn = (value, key, obj) => {
    accumulator = reducer(accumulator, value, key, obj);
  };

  _objectWhile(always(true), iterationFn, object);

  return accumulator;
};

export default curry(_objectReduce);
