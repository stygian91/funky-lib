import Transformer, { isTransformer } from "../data-structures/transformer";
import curry2 from "./curry2";

/**
 * Runs a function on an argument and returns the argument.
 *
 * Acts as a transducer when a transformer is given in place of the arg.
 *
 * @param {function} func
 * @param {any} arg
 * @returns {any}
 */
const tap = (func, arg) => {
  if (isTransformer(arg)) {
    const step = function (acc, curr, index, _arg) {
      func(curr);
      return arg.step(acc, curr, index, _arg);
    };

    return new Transformer(step, arg.init, arg.result);
  }

  func(arg);
  return arg;
};

export default curry2(tap);
