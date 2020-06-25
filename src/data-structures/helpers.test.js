import { Left, Right, Either } from "./either";
import { toEither, toIOEither, mapIOInner } from "./helpers";
import { expectEquals, expectType } from "../internals/_test-helpers";
import { IO } from ".";

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
