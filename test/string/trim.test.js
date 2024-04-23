import { trim } from "../../src/string";
import { expect, test } from 'vitest';

test("trim", () => {
  expect(trim("  ab c d ")).toEqual("ab c d");
});
