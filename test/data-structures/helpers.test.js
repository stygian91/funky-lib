import { Left, Right, Either } from "../../src/data-structures/either";
import {
  toEither,
  toIOEither,
  mapIOInner,
  toAsyncIOEither,
} from "../../src/data-structures/helpers";
import { expectEquals, expectType } from "../../src/internals/_test-helpers";
import { IO } from "../../src/data-structures";

const expectRightEquals = expectEquals(Right);
const expectLeftEquals = expectEquals(Left);
const expectIO = expectType(IO);

test("toEither", () => {
  const error = new Error("Error message");
  const throwingFunc = toEither(() => {
    throw error;
  });
  const regularFunc = toEither(() => 5);
  expectLeftEquals(new Left(error), throwingFunc);
  expectRightEquals(Either.of(5), regularFunc);
});

test("toIOEither", () => {
  const ioEither = toIOEither(() => 5);
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

test("toAsyncIOEither", async () => {
  const error = new Error("test error");
  const asyncFn = () => new Promise((resolve) => resolve(123));
  const asyncFn2 = () => new Promise((resolve, reject) => reject(error));

  const asyncIo = toAsyncIOEither(asyncFn);
  expectIO(asyncIo);
  const res = await asyncIo.run();
  expectRightEquals(Either.of(123), res);

  const asyncIo2 = toAsyncIOEither(asyncFn2);
  expectIO(asyncIo2);
  const res2 = await asyncIo2.run();
  expectLeftEquals(new Left(error), res2);
});
