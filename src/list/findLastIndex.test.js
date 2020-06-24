import findLastIndex from "./findLastIndex";
import lt from "../logic/lessThan";
import __ from "../function/placeholderArgument";

test("findLastIndex", () => {
  const list = [1, 2, 3, 1];
  const predicate = lt(__, 2);
  const predicate2 = lt(__, 0);
  expect(findLastIndex(predicate, list)).toEqual(3);
  expect(findLastIndex(predicate2, list)).toEqual(-1);
});
