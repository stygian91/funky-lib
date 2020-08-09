import { Either, Left } from "./either";
import IO from "./io";
import curry from "../function/curry";

/**
 * Executes a function and wraps its result in a Right.
 * If an exception is thrown it's caught and returned wrapped in a Left.
 *
 * @function
 * @name toEither
 * @param {function} fn
 * @returns {Left|Right}
 */
export const toEither = curry((fn) => {
  try {
    return Either.of(fn());
  } catch (error) {
    return new Left(error);
  }
});

/**
 * Wraps a function in IO and Either.
 *
 * @function
 * @name toIOEither
 * @param {function} fn
 * @returns {IO<Either>}
 */
export const toIOEither = curry((fn) => {
  return new IO(() => toEither(fn));
});

/**
 * Maps the inner value of a IO.
 *
 * @function
 * @name mapIOInner
 * @param {function} fn
 * @param {IO} ioInner
 * @returns {IO}
 */
export const mapIOInner = curry((fn, ioInner) =>
  ioInner.map((inner) => inner.map(fn))
);
