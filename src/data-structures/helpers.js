import { Either, Left } from "./either";
import IO from "./io";
import curry2 from "../function/curry2";

/**
 * Executes a function and wraps its result in a Right.
 * If an exception is thrown it's caught and returned wrapped in a Left.
 *
 * @function
 * @name toEither
 * @param {function} fn
 * @param {array} args
 * @returns {Left|Right}
 */
export const toEither = curry2((fn, args) => {
  try {
    return Either.of(fn(...args));
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
 * @param {array} args
 * @returns {IO<Either>}
 */
export const toIOEither = curry2((fn, args) => {
  return new IO(() => toEither(fn, args));
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
export const mapIOInner = curry2((fn, ioInner) =>
  ioInner.map((inner) => inner.map(fn)),
);

/**
 * Executes a function that returns a promise and wraps its result in a Right.
 * If an exception is thrown it's caught and returned wrapped in a Left.
 *
 * @function
 * @param {function}
 * @param {array}
 * @returns {Promise<Either>}
 */
export const toAsyncEither = curry2(async (fn, args) => {
  try {
    const res = await fn(...args);
    return Either.of(res);
  } catch (error) {
    return new Left(error);
  }
});
