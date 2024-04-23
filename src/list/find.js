import Transformer, { isTransformer } from "../data-structures/transformer";
import curry2 from "../function/curry2";
import reduced from "./reduced";
import objectWhile from "../internals/_objectWhile";
import isNil from "../logic/isNil";

/**
 * Returns the first element of a list that passes the condition function.
 *
 * Acts as a transducer when a transformer is given in place of the list.
 *
 * @param {function} condFn
 * @param {any[]|object} list
 * @returns {any}
 */
const find = (condFn, list) => {
  if (isTransformer(list)) {
    const step = (acc, curr, index, _list) => {
      if (condFn(curr, index, _list)) {
        return reduced(list.step(acc, curr, index, _list));
      }

      return acc;
    };

    return new Transformer(step, list.init, list.result);
  }

  if (Array.isArray(list)) {
    return list.find(condFn);
  }

  let foundKey;

  objectWhile(
    () => isNil(foundKey),
    (value, key, obj) => {
      if (condFn(value, key, obj)) {
        foundKey = key;
      }
    },
    list,
  );

  return isNil(foundKey) ? null : list[foundKey];
};

export default curry2(find);
