import __ from "./placeholderArgument";

/**
 * A simplified curry for single-argument functions.
 *
 * @param {function} fn
 * @returns {function}
 */
const curry1 = (fn) =>
  function fn2(arg) {
    if (arg !== __ && arguments.length >= 1) {
      return fn.apply(this, arguments);
    }

    return fn2;
  };

export default curry1;
