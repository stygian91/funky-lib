import findLast from "../../src/list/findLast";
import gt from "../../src/logic/greaterThan";

test("findLast", () => {
  const list = [10, 5, 12, 3];
  expect(findLast(gt(6), list)).toEqual(12);
  expect(typeof findLast(gt(100), list)).toEqual("undefined");
});
