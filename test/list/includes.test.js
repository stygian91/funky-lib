import { includes } from "../../src/list";

test("includes", () => {
  expect(includes(1, 0, [1, 2, 3])).toEqual(true);
  expect(includes(1, 1, [1, 2, 3])).toEqual(false);
  expect(includes(2, 1, [1, 2, 3])).toEqual(true);
});
