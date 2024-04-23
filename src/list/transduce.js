import Transformer from "../data-structures/transformer";
import curry from "../function/curry";
import T from "../function/T";
import _reduceWhile from "../internals/_reduceWhile";

const transduce = (transducer, reducer, initialValue, list) =>
  _reduceWhile(
    T,
    transducer(new Transformer(reducer, () => initialValue)),
    list,
  );

export default curry(transduce);
