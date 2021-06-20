import curry2 from "../function/curry2";

export const lensSymbol = Symbol("lensSymbol");

/**
 * Takes a set of getter/setter functions
 * and wraps them in a lens object, that focuses on a specific part of a larger data object.
 * The lens should be used with the `view`, `set` and `over` functions.
 * The lens should not be used on its own
 * as its internal implementation should be treated as a black box.
 *
 * The getter and setter functions should not modify the original data object.
 * The getter should be a unary function with the data as its only argument.
 * The setter function should be a binary function that receives the new value as its first argument
 * and the data object as its second argument.
 *
 * @param {function} getter
 * @param {function} setter
 * @returns {object}
 * @see view
 * @see set
 * @see over
 */
const lens = (getter, setter) => ({
  [lensSymbol]: {
    getter,
    setter,
  },
});

export default curry2(lens);
