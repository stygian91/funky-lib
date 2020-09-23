import { Either } from "./either";
import IO from "./io";

/**
 * Executes a function and wraps its result in a Right.
 * If an exception is thrown it's caught and returned wrapped in a Left.
 */
export function toEither(fn: Function): Either;

/**
 * Wraps a function in IO and Either.
 */
export function toIOEither(fn: Function): IO;

/**
 * Maps the inner value of a IO.
 */
export function mapIOInner(fn: Function): IO;
