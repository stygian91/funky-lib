import curry from "../function/curry";
import _objectWhile from "./_objectWhile";
import always from "../function/always";

const _objectForEach = (iterationFn, object) =>
  _objectWhile(always(true), iterationFn, object);

export default curry(_objectForEach);
