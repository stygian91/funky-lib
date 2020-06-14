import { expectEquals, expectType } from "../internals/_test-helpers";
import { Left, Right, Either, toEither } from "./either";
import Identity from "./identity";

const expectRightEquals = expectEquals(Right);
const expectLeftEquals = expectEquals(Left);

test("Either", () => {
  const either = Either.of(1);
  expectRightEquals(new Right(1), either);
  expect(either.isRight).toEqual(true);
  expect(either.isLeft).toEqual(false);
  expect(() => Right.of(2)).toThrow();
  expect(either.chain((x) => x + 5)).toEqual(6);
  const rightOfFunc = Either.of((x) => x + 3);
  expect(rightOfFunc.ap(Identity.of(5)).join()).toEqual(8);
  const rightOfId = Either.of(Identity.of(10));
  const idOfRight = rightOfId.sequence(Identity.of);
  expectType(Identity, idOfRight);
  expectRightEquals(idOfRight.join(), Either.of(10));

  // Left:
  expect(() => Left.of(2)).toThrow();
  expectLeftEquals(new Left("an error"), new Left("an error"));
  expect(new Left().isLeft).toEqual(true);
  expect(new Left().isRight).toEqual(false);
  expect(Either.of(1).chain((x) => x * 3)).toEqual(3);
  expectLeftEquals(
    new Left(),
    new Left().chain((x) => x + 4)
  );
  expectLeftEquals(
    new Left(),
    new Left().map((x) => x + 4)
  );
  expectLeftEquals(
    new Left(),
    new Left().join((x) => x + 4)
  );
  expectLeftEquals(new Left(), new Left().ap(Identity.of(() => x * 2)));

  const idOfLeft = Identity.of(new Left());
  const idOfLeft2 = new Left().sequence(Identity.of);
  expectLeftEquals(idOfLeft.join(), idOfLeft2.join());

  const idOfLeft3 = new Left().traverse(Identity.of);
  expectLeftEquals(idOfLeft.join(), idOfLeft3.join());
});

test("toEither", () => {
  const error = new Error("Error message");
  const throwingFunc = toEither(() => {
    throw error;
  });
  const regularFunc = toEither(() => 5);
  expectLeftEquals(new Left(error), throwingFunc);
  expectRightEquals(Either.of(5), regularFunc);
});
