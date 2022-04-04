import curry2 from "../function/curry2";
import Transformer, { isTransformer } from "../data-structures/transformer";
import reduce from "./reduce";

/**
 * Maps over a list, object or string and returns a new object of the corresponding type.
 * Each element of the collection is passed through the mapping function
 * and its return value is used for the new collection.
 * The mapping function receives `(value, key, list)`,
 * where `list` is the full list, object or string.
 * Defers to [Array.prototype.map]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map} for lists
 *
 * Acts as a transducer when a transformer is given in place of the list.
 *
 * @param {function} func
 * @param {any[]|object|string} list
 * @returns {any[]|object|string}
 */
const map = (func, list) => {
  if (isTransformer(list)) {
    const step = function(acc, curr, index, _list) {
      return list.step(acc, func(curr, index, _list), index, _list);
    };

    return new Transformer(step, list.init, list.result);
  }

  if (list && typeof list.map === 'function') {
    return list.map(func);
  }

  if (typeof list === "object") {
    return reduce(
      (acc, curr, key, obj) => {
        acc[key] = func(curr, key, obj);
        return acc;
      },
      {},
      list
    );
  }

  if (typeof list === "string") {
    return reduce(
      (acc, curr, key, str) => {
        acc += func(curr, key, str);
        return acc;
      },
      "",
      list
    );
  }

  throw new Error("Argument is not mappable");
};

export default curry2(map);
