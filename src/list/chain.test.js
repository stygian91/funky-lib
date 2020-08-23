import { chain } from "./";
import Maybe from "../data-structures/maybe";
import { expectValue } from "../internals/_test-helpers";

test("chain", () => {
  const list = [1, 2, 3, 4];
  const fn = (x) => [x, x * 2];
  const fn2 = (x) => x * 2;
  expect(chain(fn, list)).toEqual([1, 2, 2, 4, 3, 6, 4, 8]);
  expect(chain(fn2, list)).toEqual([2, 4, 6, 8]);
  expect(list).toEqual([1, 2, 3, 4]);

  const maybeA = Maybe.of(null);
  const maybeB = Maybe.of(2);
  expectValue(Maybe, null, chain(fn, maybeA));
  expect(chain(fn, maybeB)).toEqual([2, 4]);
});
