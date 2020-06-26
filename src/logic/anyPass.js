import curry from "../function/curry";
import reduceWhile from "../list/reduceWhile";

const anyPass = (...funcs) => (...args) =>
  reduceWhile(
    (acc) => !acc,
    (acc, current) => acc || current(...args),
    false,
    funcs
  );

export default curry(anyPass);
