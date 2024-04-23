import { indexOf } from "../../src/string";
import { expect, test } from 'vitest';

test("indexOf", () => {
  expect(indexOf("asd", 0, "qwe")).toEqual(-1);
  expect(indexOf("ipsum", 0, "lorem ipsum")).toEqual(6);
  expect(indexOf("lorem", 6, "lorem lorem")).toEqual(6);
});
