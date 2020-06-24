import findIndex from "./findIndex";
import gt from "../logic/greaterThan";
import __ from "../function/placeholderArgument";

test("findIndex", () => {
  const list = [10, 5, 12, 3];
  const predicate = gt(__, 10);
  const predicate2 = gt(__, 100);
  expect(findIndex(predicate, list)).toEqual(2);
  expect(findIndex(predicate2, list)).toEqual(-1);
});
