import { Identity, Maybe } from "../../src/data-structures";
import { expectType, expectValue } from "../../src/internals/_test-helpers";
import { expect, test } from 'vitest';

const expectMaybe = expectType(Maybe);
const expectMaybeVal = expectValue(Maybe);
const expectId = expectType(Identity);

test("it's a setoid", () => {
  const maybeNull1 = Maybe.of(null);
  const maybeNull2 = Maybe.of(null);
  const maybeA = Maybe.of("a");
  const maybeA1 = Maybe.of("a");
  const maybeB = Maybe.of("b");
  expect(maybeNull1.equals(maybeNull2)).toEqual(true);
  expect(maybeNull1.equals(maybeA)).toEqual(false);
  expect(maybeA.equals(maybeA1)).toEqual(true);
  expect(maybeA.equals(maybeB)).toEqual(false);
});

test("it joins values", () => {
  expect(Maybe.of(321).join()).toEqual(321);
  expect(Maybe.of(321).getValue()).toEqual(321);

  const maybeNull = Maybe.of(null).join();
  expect(maybeNull.getValue()).toEqual(null);
  expectMaybe(maybeNull);
  expectMaybeVal(null, maybeNull);
});

test("it maps over values", () => {
  const maybe = Maybe.of("a");
  const maybeNull = Maybe.of(null);
  const fn = (x) => x.concat("bcd");
  const res = maybe.map(fn);

  expectMaybeVal("abcd", res);
  expect(maybeNull.map(fn).isNothing).toEqual(true);
});

test("it recognises Just()", () => {
  expect(Maybe.of(123).isJust).toEqual(true);
  expect(Maybe.of(null).isJust).toEqual(false);
});

test("it applies Just(func)", () => {
  const fn = (x) => x + 5;
  const maybeNum = Maybe.of(10);
  const maybeNull = Maybe.of(null);

  expectMaybeVal(15, Maybe.of(fn).ap(maybeNum));
  expectMaybeVal(null, maybeNull.ap(maybeNum));
});

test("it chains", () => {
  expect(Maybe.of(20).chain((x) => x - 10)).toEqual(10);
});

test("it's traversable", () => {
  const arr = [1, 2];
  const maybeOfId = Maybe.of(Identity.of(arr));
  const idOfMaybe = maybeOfId.sequence(Identity.of);
  expectId(idOfMaybe);
  const maybe = idOfMaybe.join();
  expectMaybe(maybe);
  expect(maybe.join()).toEqual([1, 2]);

  const maybeNull = Maybe.of(null);
  const idOfMaybe2 = maybeNull.sequence(Identity.of);
  expectId(idOfMaybe2);
  const maybe2 = idOfMaybe2.join();
  expectMaybe(maybe2);
  expect(maybe2.isNothing).toEqual(true);
});
