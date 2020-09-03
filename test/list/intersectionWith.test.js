import { intersectionWith } from "../../src/list";

test("intersectionWith", () => {
  const idsEqual = (obj1, obj2) => obj1.id === obj2.id;
  const list1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const list2 = [{ id: 2 }, { id: 3 }, { id: 4 }];
  expect(intersectionWith(idsEqual, list1, list2)).toEqual([
    { id: 2 },
    { id: 3 },
  ]);
  expect(list1).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  expect(list2).toEqual([{ id: 2 }, { id: 3 }, { id: 4 }]);
});
