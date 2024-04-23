import __ from "./placeholderArgument";
import curry1 from "./curry1";
import curry2 from "./curry2";

// jshint maxcomplexity: false
/**
 * A simplified curry for tertiary functions.
 *
 * @param {function} fn
 * @return {function}
 */
const curry3 = (fn) =>
  function fn3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return fn3;
      case 1:
        return a === __
          ? fn3
          : curry2(function (_b, _c) {
              return fn(a, _b, _c);
            });
      case 2:
        return a === __ && b === __
          ? fn3
          : a === __
            ? curry2(function (_a, _c) {
                return fn(_a, b, _c);
              })
            : b === __
              ? curry2(function (_b, _c) {
                  return fn(a, _b, _c);
                })
              : curry1(function (_c) {
                  return fn(a, b, _c);
                });
      default:
        return a === __ && b === __ && c === __
          ? fn3
          : a === __ && b === __
            ? curry2(function (_a, _b) {
                return fn(_a, _b, c);
              })
            : a === __ && c === __
              ? curry2(function (_a, _c) {
                  return fn(_a, b, _c);
                })
              : b === __ && c === __
                ? curry2(function (_b, _c) {
                    return fn(a, _b, _c);
                  })
                : a === __
                  ? curry1(function (_a) {
                      return fn(_a, b, c);
                    })
                  : b === __
                    ? curry1(function (_b) {
                        return fn(a, _b, c);
                      })
                    : c === __
                      ? curry1(function (_c) {
                          return fn(a, b, _c);
                        })
                      : fn(a, b, c);
    }
  };

export default curry3;
