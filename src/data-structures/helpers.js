import { Either, Left } from "./either";
import curry from "../function/curry";

export const toEither = curry((fn) => {
  try {
    return Either.of(fn());
  } catch (error) {
    return new Left(error);
  }
});

export const mapIOEither = curry((fn, ioEither) =>
  ioEither.map((either) => either.map(fn))
);
