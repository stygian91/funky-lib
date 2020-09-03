import findIndex from "../../src/list/findIndex";
import gt from "../../src/logic/greaterThan";

test("findIndex", () => {
  const list = [10, 5, 12, 3];
  expect(findIndex(gt(10), list)).toEqual(2);
  expect(findIndex(gt(100), list)).toEqual(-1);
});
