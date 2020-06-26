import groupBy from "./groupBy";
import identity from "../function/identity";

test("groups lists with a specified function", () => {
  const list = [1, 2, 1, 3, 4, 2];
  const result = groupBy(identity, list);
  const expected = {
    1: [1, 1],
    2: [2, 2],
    3: [3],
    4: [4],
  };

  expect(result).toEqual(expected);
});
