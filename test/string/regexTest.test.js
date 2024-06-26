// use an alias so that there's no conflict with jest
import testFn from "../../src/string/regexTest";
import { expect, test } from 'vitest';

test("Regex test", () => {
  const testLipsum = testFn(/lipsum/);
  expect(testLipsum("lorem ipsum sit amet")).toEqual(false);
  expect(testLipsum("lipsum is a shorthand for...")).toEqual(true);
});
