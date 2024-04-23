import converge from "../../src/function/converge";
import reduce from "../../src/list/reduce";
import add from "../../src/math/add";
import div from "../../src/math/divide";
import prop from "../../src/object/prop";
import { expect, test } from 'vitest';

test("it executes the branch functions and passes their results to the converging function", () => {
  const sum = reduce(add, 0);
  const average = converge(div, [prop("length"), sum]);

  const result = average([1, 2, 3, 4, 5]);
  expect(result).toBe(3);
});
