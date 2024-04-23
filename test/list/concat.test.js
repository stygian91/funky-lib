import concat from "../../src/list/concat";
import { expect, test } from 'vitest';

test("it concatenates two arrays", () => {
  const leftArray = [1, 2];
  const rightArray = [3, 4];
  const leftString = "1, 2";
  const rightString = "5, 6";

  const resultArray = concat(leftArray, rightArray);
  const resultString = concat(leftString, rightString);

  expect(resultArray.length).toBe(4);
  expect(resultArray).toEqual([1, 2, 3, 4]);
  expect(resultString.length).toEqual(8);
  expect(resultString).toEqual("1, 25, 6");
  expect(() => concat(leftArray, rightString)).toThrow();
});
