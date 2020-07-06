import reduceWhile from "./reduceWhile";
import curry from "../function/curry";

const any = (condFn, list) =>
  reduceWhile(
    (acc) => !acc,
    (acc, current) => acc || condFn(current),
    false,
    list
  );

export default curry(any);
