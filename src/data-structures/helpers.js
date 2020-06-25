import { Either, Left } from "./either";
import IO from "./io";
import curry from "../function/curry";

export const toEither = curry((fn) => {
  try {
    return Either.of(fn());
  } catch (error) {
    return new Left(error);
  }
});

export const toIOEither = curry((fn) => {
  return new IO(() => toEither(fn));
});

export const mapIOInner = curry((fn, ioEither) =>
  ioEither.map((either) => either.map(fn))
);
