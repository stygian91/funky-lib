import map from "./map";
import _flatten from "../internals/_flatten";
import curry2 from "../function/curry2";
import { isNil } from "../logic";
import Transformer, { isTransformer } from "../data-structures/transformer";

/**
 * Maps a function over a list and concatenates the results.
 * Dispatches to the `chain` method of the second argument, if one exists.
 *
 * Acts as a transducer when a transformer is given in place of the list.
 *
 * @param {function} fn
 * @param {any[]} list
 * @returns {any[]}
 */
const chain = (fn, list) => {
  if (isTransformer(list)) {
    const step = (acc, curr, index, _list) =>
      list.step(acc, fn(curr, index, _list), index, _list);

    return new Transformer(step, list.init, _flatten(false));
  }

  if (!isNil(list) && typeof list.chain === "function") {
    return list.chain(fn);
  }

  return _flatten(false, map(fn, list));
};

export default curry2(chain);
