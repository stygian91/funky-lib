import __ from "./placeholderArgument";
import _arity from "../internals/_arity";

const _curryN = (length, received, func) => (...args) => {
  let combined = [];
  let argsIdx = 0;
  let left = length;
  let combinedIdx = 0;

  while (combinedIdx < received.length || argsIdx < args.length) {
    let result;

    if (
      combinedIdx < received.length &&
      (received[combinedIdx] !== __ || argsIdx >= args.length)
    ) {
      result = received[combinedIdx];
    } else {
      result = args[argsIdx++];
    }

    combined[combinedIdx] = result;

    if (result !== __) {
      left--;
    }

    combinedIdx++;
  }

  return left <= 0
    ? func.apply(this, combined)
    : _arity(left, _curryN(length, combined, func));
};

const curry = func => _curryN(func.length, [], func);

export default curry;
