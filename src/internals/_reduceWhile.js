import curry3 from "../function/curry3";
import { isReduced, _reduced } from "../list/reduced";
import _objectWhile from "../internals/_objectWhile";
import _stringWhile from "../internals/_stringWhile";
import _listWhile from "../internals/_listWhile";

const _runReduce = (whileFn, condFn, transformer, object) => {
  let accumulator = transformer.init();

  whileFn(
    (value, key, obj) => condFn(accumulator, value, key, obj) && !isReduced(accumulator),
    (value, key, obj) => {
      accumulator = transformer.step(accumulator, value, key, obj);
    },
    object
  );

  return transformer.result(isReduced(accumulator) ? accumulator[_reduced] : accumulator);
};

const _reduceWhile = (condFn, transformer, list) => {
  const partiallyApplied = (whileFn) =>
    _runReduce(whileFn, condFn, transformer, list);

  if (Array.isArray(list)) {
    return partiallyApplied(_listWhile);
  }

  if (typeof list === "object") {
    return partiallyApplied(_objectWhile);
  }

  if (typeof list === "string") {
    return partiallyApplied(_stringWhile);
  }

  throw new Error("Argument is not reducible.");
};

export default curry3(_reduceWhile);
