import { trim } from "../../src/string";

test("trim", () => {
  expect(trim("  ab c d ")).toEqual("ab c d");
});
