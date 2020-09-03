import any from "../../src/list/any";
import __ from "../../src/function/placeholderArgument";
import gt from "../../src/logic/greaterThan";

test("returns true if any of the items on the list match the function", () => {
  const list = [1, 2, 3, 4];
  const checkList = any(__, list);

  expect(checkList(gt(3))).toBe(true);
  expect(checkList(gt(0))).toBe(true);
  expect(checkList(gt(4))).toBe(false);
});
