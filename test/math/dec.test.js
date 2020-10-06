import { dec } from "../../src";

test("dec", () => {
  expect(dec(1)).toEqual(0);
  expect(dec(0)).toEqual(-1);
});
