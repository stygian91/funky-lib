import thunkify from "../../src/function/thunkify";
import { expect, test } from 'vitest';

test("delays execution by returning a nullary function", () => {
  const func = (a, b) => a * b;
  const thunkified = thunkify(func);
  const twoTimesThree = thunkified(2, 3);

  expect(typeof twoTimesThree).toBe("function");
  expect(twoTimesThree()).toBe(6);
});
