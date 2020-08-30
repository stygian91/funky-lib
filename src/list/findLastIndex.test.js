import findLastIndex from "./findLastIndex";
import lt from "../logic/lessThan";
import __ from "../function/placeholderArgument";

test("findLastIndex", () => {
  const list = [1, 2, 3, 1];
  expect(findLastIndex(lt(2), list)).toEqual(3);
  expect(findLastIndex(lt(0), list)).toEqual(-1);
});
