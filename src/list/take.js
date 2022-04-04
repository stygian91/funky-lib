import Transformer, { isTransformer } from "../data-structures/transformer";
import slice from "./slice";
import curry from "../function/curry";

/**
 * Takes the first `n` elements of a list,
 * where `n` is the number of elements to take.
 * The original list is left unchanged.
 *
 * Acts as a transducer when a transformer is given in place of the list.
 *
 * @function
 * @name take
 * @param {number} n
 * @param {any[]} list
 * @returns {any[]}
 */
const take = (n, list) => {
  if (isTransformer(list)) {
    const step = function(acc, curr, index, _list) {
      if (index < n) {
        return list.step(acc, curr, index, _list);
      }

      return acc;
    };

    return new Transformer(step, list.init, list.result);
  }

  return slice(0, n, list);
}

export default curry(take);
