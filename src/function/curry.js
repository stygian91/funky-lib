import __ from "./placeholderArgument";
import _arity from "../internals/_arity";

const _curryN = (length, received, func) => (...args) => {
  let combined = [];
  let argsIdx = 0;
  let left = length;
  let combinedIdx = 0;

  while (combinedIdx < received.length || argsIdx < args.length) {
    let arg;

    if (
      combinedIdx < received.length &&
      (received[combinedIdx] !== __ || argsIdx >= args.length)
    ) {
      arg = received[combinedIdx];
    } else {
      arg = args[argsIdx++];
    }

    if (arg !== __) {
      left--;
    }

    combined[combinedIdx++] = arg;
  }

  if (left <= 0) {
    return func.apply(this, combined);
  }

  return _arity(left, _curryN(length, combined, func));
};

/**
 * Curries the provided function.
 *
 * @param {function} func
 * @returns {function}
 */
const curry = (func) => _curryN(func.length, [], func);

export default curry;
