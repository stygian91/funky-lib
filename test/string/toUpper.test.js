import { toUpper } from "../../src/string";

test("toUpper", () => {
  expect(toUpper("abc")).toEqual("ABC");
});
