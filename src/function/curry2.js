import __ from "./placeholderArgument";
import curry1 from "./curry1";

/**
 * A simplified curry for binary functions.
 *
 * @param {function} fn
 * @return {function}
 */
const curry2 = (fn) =>
  function fn2(a, b) {
    switch (arguments.length) {
      case 0:
        return fn2;

      case 1:
        return a === __ ? fn2 : curry1((b1) => fn(a, b1));

      default:
        if (a === __ && b === __) {
          return fn2;
        }

        if (a === __) {
          return curry1((a1) => fn(a1, b));
        }

        if (b === __) {
          return curry1((b1) => fn(a, b1));
        }

        return fn(a, b);
    }
  };

export default curry2;
