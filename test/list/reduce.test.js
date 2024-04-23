import * as F from "../../src";
import { expect, test, describe } from 'vitest';

describe("reduce", () => {
  test("it accumulates a result by calling the function over the list", () => {
    const list = [1, 2, 3, 4];
    const sum = F.reduce(
      (accumulator, current) => accumulator + current,
      0,
      list
    );

    expect(sum).toBe(10);
  });

  test("it stops when reduced is returned", () => {
    const list = [1, 2, 3, 4];
    const sum = F.reduce(
      (accumulator, current) => {
        if (accumulator >= 5) {
          return F.reduced(accumulator);
        }

        return accumulator + current;
      },
      0,
      list
    );

    expect(sum).toBe(6);
  });
});
