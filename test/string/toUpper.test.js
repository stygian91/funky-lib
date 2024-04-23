import { toUpper } from "../../src/string";
import { expect, test } from 'vitest';

test("toUpper", () => {
  expect(toUpper("abc")).toEqual("ABC");
});
