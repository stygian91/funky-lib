import always from "../function/always";
import curry from "../function/curry";
import reduceWhile from "./reduceWhile";

const reduce = (func, initialValue, list) =>
  reduceWhile(always(true), func, initialValue, list);

export default curry(reduce);
