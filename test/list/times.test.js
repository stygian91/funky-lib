import id from "../../src/function/identity";
import { times } from "../../src/list";

test("times", () => {
  expect(times(id, 5)).toEqual([0, 1, 2, 3, 4]);
});
