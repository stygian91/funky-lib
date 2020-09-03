import { toLower } from "../../src/string";

test("toLower", () => {
  expect(toLower("ABC")).toEqual("abc");
});
