import reduceWhile from "./reduceWhile";
import { curry, identity } from "../function/";

const all = (condFn, list) =>
  reduceWhile(
    identity,
    (acc, current, index, list) => acc && condFn(current, index, list),
    true,
    list
  );

export default curry(all);
