import curry from "../function/curry";
import _stringWhile from "./_stringWhile";

const _stringReduceWhile = (condFn, reducer, initialValue, string) => {
  let accumulator = initialValue;

  const iterationFn = (value, key, str) => {
    accumulator = reducer(accumulator, value, key, str);
  };

  const iterationCondFn = (value, key, str) =>
    condFn(accumulator, value, key, str);

  _stringWhile(iterationCondFn, iterationFn, string);

  return accumulator;
};

export default curry(_stringReduceWhile);
