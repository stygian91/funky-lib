import curry from "../function/curry";
import _listReduceWhile from "../internals/_listReduceWhile";
import _objectReduceWhile from "../internals/_objectReduceWhile";
import _stringReduceWhile from "../internals/_stringReduceWhile";

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
  if (Array.isArray(list)) {
    return _listReduceWhile(condFn, reducer, initialValue, list);
  }

  if (typeof list === "object") {
    return _objectReduceWhile(condFn, reducer, initialValue, list);
  }

  if (typeof list === "string") {
    return _stringReduceWhile(condFn, reducer, initialValue, list);
  }

  throw new Error("Argument is not reducible.");
};

export default curry(reduceWhile);
