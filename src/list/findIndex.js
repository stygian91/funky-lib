import Transformer, { isTransformer } from "../data-structures/transformer";
import curry2 from "../function/curry2";
import reduced from "./reduced";

/**
 * Returns the index of the first element that
 * passes the condition function or -1 if no element is found.
 *
 * Acts as a transducer when a transformer is given in place of the list.
 *
 * @param {function} condFn
 * @param {any[]} list
 * @returns {number}
 */
const findIndex = (condFn, list) => {
  if (isTransformer(list)) {
    const step = (acc, curr, index, _list) => {
      const _step = (val) => list.step(acc, val, index, _list)
      if (condFn(curr, index, _list)) {
        return reduced(_step(index));
      }

      if (index === _list.length - 1) {
        return reduced(_step(-1));
      }

      return acc;
    };

    return new Transformer(step, list.init, list.result);
  }

  for (let index = 0; index < list.length; index++) {
    const value = list[index];
    if (condFn(value, index, list)) {
      return index;
    }
  }

  return -1;
};

export default curry2(findIndex);
