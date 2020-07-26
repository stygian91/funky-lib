import { trim } from "./";

test("trim", () => {
  expect(trim("  ab c d ")).toEqual("ab c d");
});
