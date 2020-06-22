import findLast from "./findLast";
import gt from "../logic/greaterThan";
import __ from "../function/placeholderArgument";

test("findLast", () => {
  const list = [10, 5, 12, 3];
  expect(findLast(gt(__, 6), list)).toEqual(12);
  expect(typeof findLast(gt(__, 100), list)).toEqual("undefined");
});
