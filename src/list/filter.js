import curry2 from "../function/curry2";
import path from "../object/path";
import _objectFilter from "../internals/_objectFilter";
import _stringFilter from "../internals/_stringFilter";
import Transformer, { isTransformer } from "../data-structures/transformer";

/**
 * Filters the elements of an array, object or string
 * and returns a new array, object or string respectively.
 *
 * Acts as a transducer when a transformer is given in place of the list.
 *
 * @param {function} func
 * @param {array|string|object} list
 * @returns {array|string|object}
 */
const filter = (func, list) => {
  if (isTransformer(list)) {
    const step = function (acc, curr, index, _list) {
      if (func(curr, index, list)) {
        return list.step(acc, curr, index, _list);
      }

      return acc;
    };

    return new Transformer(step, list.init, list.result);
  }

  if (typeof path("filter", list) === "function") {
    return list.filter(func);
  }

  if (typeof list === "object") {
    return _objectFilter(func, list);
  }

  if (typeof list === "string") {
    return _stringFilter(func, list);
  }

  throw new Error("Argument is not filterable.");
};

export default curry2(filter);
