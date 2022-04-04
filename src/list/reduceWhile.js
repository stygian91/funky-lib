import Transformer from "../data-structures/transformer";
import curry from "../function/curry";
import _reduceWhile from "../internals/_reduceWhile";

/**
 * Similar to `reduce`, but it will terminate early if the `condFn` returns false.
 * The condition function receives the same arguments as the reducer.
 * See the `reduce` function for details on the reducer arguments.
 *
 * @see reduce
 * @param {function} condFn
 * @param {function} reducer
 * @param {any} initialValue
 * @param {any[]|object|string} list
 * @returns {any}
 */
const reduceWhile = (condFn, reducer, initialValue, list) => {
  const transformer = new Transformer(reducer, () => initialValue);
  return _reduceWhile(condFn, transformer, list);
};

export default curry(reduceWhile);
