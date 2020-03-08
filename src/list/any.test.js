import any from "./any";
import __ from "../function/placeholderArgument";
import gt from "../logic/greaterThan";

test("returns true if any of the items on the list match the function", () => {
  const list = [1, 2, 3, 4];
  const checkList = any(__, list);

  expect(checkList(gt(__, 3))).toBe(true);
  expect(checkList(gt(__, 0))).toBe(true);
  expect(checkList(gt(__, 4))).toBe(false);
});
