// use an alias so that there's no conflict with jest
import testFn from "./regex-test";

test("Regex test", () => {
  const testLipsum = testFn(/lipsum/);
  expect(testLipsum("lorem ipsum sit amet")).toEqual(false);
  expect(testLipsum("lipsum is a shorthand for...")).toEqual(true);
});
