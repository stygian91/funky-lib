import * as F from "../../src";

test("it takes the first N elements from a list", () => {
  const list = [1, 2, 3, 4];
  expect(F.take(2, list)).toEqual([1, 2]);

  const res = F.transduce(F.take(2), (acc, curr) => F.concat(acc, [curr]), [], list);
  expect(res).toEqual([1, 2]);

  expect(list).toEqual([1, 2, 3, 4]);
});
