import arity from "./arity";
import curry from "./curry";

// jshint maxcomplexity: false

/**
 * Creates a curried version of a constructor function.
 * The resulting function does not need the use of the `new` keyword.
 * The constructor function can only take up to 10 arguments.
 *
 * @function
 * @param {function} classFn
 * @returns {function}
 */
const construct = curry((classFn) => constructN(classFn.length, classFn));

/**
 * Creates a curried constructor, like `construct`,
 * but also takes the constructor's arity as its first argument.
 *
 * @see construct
 * @function
 * @param {number} n
 * @param {function} classFn
 * @returns {function}
 */
export const constructN = curry((n, classFn) => {
  if (n < 0 || n > 10) {
    throw new Error("The n argument must be from 0 to 10, inclusive.");
  }

  if (n === 0) {
    return function () {
      return new classFn();
    };
  }

  return curry(
    arity(n, function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      switch (n) {
        case 1:
          return new classFn(a0);

        case 2:
          return new classFn(a0, a1);

        case 3:
          return new classFn(a0, a1, a2);

        case 4:
          return new classFn(a0, a1, a2, a3);

        case 5:
          return new classFn(a0, a1, a2, a3, a4);

        case 6:
          return new classFn(a0, a1, a2, a3, a4, a5);

        case 7:
          return new classFn(a0, a1, a2, a3, a4, a5, a6);

        case 8:
          return new classFn(a0, a1, a2, a3, a4, a5, a6, a7);

        case 9:
          return new classFn(a0, a1, a2, a3, a4, a5, a6, a7, a8);

        case 10:
        default:
          return new classFn(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      }
    })
  );
});

export default construct;
