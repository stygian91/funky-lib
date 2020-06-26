import adjust from "./adjust";
import __ from "../function/placeholderArgument";

test("it updates an item at index with a transform fn and returns the list as a copy", () => {
  const list = [1, 2, 3, 4];
  const transform = (a) => a * 2;
  const adjustList = adjust(__, transform, list);
  const result1 = adjustList(1);
  const result2 = adjustList(-1);

  expect(result1 === list).toEqual(false);
  expect(result1.length).toEqual(4);
  expect(result1).toEqual([1, 4, 3, 4]);

  expect(result2 === list).toEqual(false);
  expect(result2.length).toEqual(4);
  expect(result2).toEqual([1, 2, 3, 8]);
});
