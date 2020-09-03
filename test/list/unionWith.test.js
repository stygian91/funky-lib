import { unionWith } from "../../src/list";

test("unionWith", () => {
  const list1 = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 5 }];
  const list2 = [{ id: 2 }, { id: 4 }, { id: 3 }];
  const idsEqual = (obj1, obj2) => obj1.id === obj2.id;

  expect(unionWith(idsEqual, list1, list2)).toEqual([
    { id: 1 },
    { id: 2 },
    { id: 5 },
    { id: 4 },
    { id: 3 },
  ]);
  expect(list1).toEqual([{ id: 1 }, { id: 2 }, { id: 1 }, { id: 5 }]);
  expect(list2).toEqual([{ id: 2 }, { id: 4 }, { id: 3 }]);
});
