import map from "./map";
import _flatten from "../internals/_flatten";
import curry from "../function/curry";
import { isNil } from "../logic";

/**
 * Maps a function over a list and concatenates the results.
 * Dispatches to the `chain` method of the second argument, if one exists.
 *
 * @param {function} fn
 * @param {any[]} list
 * @returns {any[]}
 */
const chain = (fn, list) => {
  if (!isNil(list) && typeof list.chain === "function") {
    return list.chain(fn);
  }

  return _flatten(false, map(fn, list));
};

export default curry(chain);
