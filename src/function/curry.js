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
 * A curried function does not need to have all of its provided at once.
 * If `f` is a ternary and g = curry(f), then the following is equivalent:
 *
 * <pre>
 * g(1)(2)(3);
 * g(1)(2, 3);
 * g(1, 2)(3);
 * g(1, 2, 3);
 * </pre>
 *
 * Additionaly, the F.__ symbol can be used as a placeholder argument,
 * when you want to partially apply arguments with gaps inbetween them.
 *
 * <pre>
 * g(1, __, 3)(2);
 * g(__, __, 3)(1, 2);
 * g(__, __, 3)(__, 2)(1);
 * </pre>
 *
 * @param {function} func
 * @returns {function}
 */
const curry = (func) => _curryN(func.length, [], func);

export default curry;
