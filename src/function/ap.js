import curry2 from "../function/curry2";
import reduce from "../list/reduce";
import concat from "../list/concat";
import map from "../list/map";

/**
 * Applies a list of functions to a list of values.
 * If functions are provided for both arguments, returns a function that's equivalent to f(x, g(x)).
 * Defers to the `ap` method of `applyF`, if present.
 *
 * @param {applicative|function|function[]} applyF
 * @param {array|function} applyX
 * @returns {any}
 */
const ap = (applyF, applyX) => {
  if (typeof applyF.ap === "function") {
    return applyF.ap(applyX);
  }

  if (typeof applyF === "function") {
    return (x) => applyF(x, applyX(x));
  }

  return reduce((acc, f) => concat(acc, map(f, applyX)), [], applyF);
};

export default curry2(ap);
