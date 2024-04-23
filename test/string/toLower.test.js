import { toLower } from "../../src/string";
import { expect, test } from 'vitest';

test("toLower", () => {
  expect(toLower("ABC")).toEqual("abc");
});
