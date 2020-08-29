import { differenceWith } from ".";

test("differenceWith", () => {
  const eqFn = (x, y) => x.a === y.a;
  const list1 = [{ a: 1 }, { a: 3 }, { a: 1 }, { a: 2 }, { a: 4 }];
  const list2 = [{ a: 2 }, { a: 3 }, { a: 5 }, { a: 2 }];

  expect(differenceWith(eqFn, list1, list2)).toEqual([{ a: 1 }, { a: 4 }]);

  expect(list1).toEqual([{ a: 1 }, { a: 3 }, { a: 1 }, { a: 2 }, { a: 4 }]);
  expect(list2).toEqual([{ a: 2 }, { a: 3 }, { a: 5 }, { a: 2 }]);
});
