import { Left, Right, Either } from "../../src/data-structures/either";
import {
  toEither,
  toIOEither,
  mapIOInner,
  toAsyncEither,
} from "../../src/data-structures/helpers";
import { expectEquals, expectType } from "../../src/internals/_test-helpers";
import { IO } from "../../src/data-structures";
import { expect, test } from 'vitest';

const expectRightEquals = expectEquals(Right);
const expectLeftEquals = expectEquals(Left);
const expectIO = expectType(IO);

test("toEither", () => {
  const error = new Error("Error message");
  const throwingFunc = toEither((err) => {
    throw err;
  }, [error]);
  const regularFunc = toEither((a) => a, [5]);
  expectLeftEquals(new Left(error), throwingFunc);
  expectRightEquals(Either.of(5), regularFunc);
});

test("toIOEither", () => {
  const ioEither = toIOEither(() => 5, []);
  expectIO(ioEither);
  expectRightEquals(Either.of(5), ioEither.run());
});

test("mapIOInner", () => {
  const x = 5;
  const either = Either.of(x);
  const ioEither = IO.of(either);
  const res = mapIOInner((a) => a + 5, ioEither);
  expectIO(res);
  expect(res.run().join()).toEqual(10);
});

test("toAsyncEither", async () => {
  const error = new Error("test");
  const asyncFn = (arg) =>
    new Promise((resolve) => setTimeout(() => resolve(arg), 10));

  const asyncFn2 = (err) =>
    new Promise((resolve, reject) => setTimeout(() => reject(err), 10));

  const res = await toAsyncEither(asyncFn, [42]);
  const res2 = await toAsyncEither(asyncFn2, [error]);

  expectRightEquals(Either.of(42), res);
  expectLeftEquals(new Left(error), res2);
});
