import curry from "../function/curry";
import _objectWhile from "./_objectWhile";

const _objectReduceWhile = (condFn, reducer, initialValue, object) => {
  let accumulator = initialValue;

  const iterationFn = (value, key, obj) => {
    accumulator = reducer(accumulator, value, key, obj);
  };

  const iterationCondFn = (value, key, obj) =>
    condFn(accumulator, value, key, obj);

  _objectWhile(iterationCondFn, iterationFn, object);

  return accumulator;
};

export default curry(_objectReduceWhile);
