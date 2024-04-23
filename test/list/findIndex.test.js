import * as F from "../../src";
import { expect, test, describe } from 'vitest';

describe('findIndex', () => {
  test("list", () => {
    const list = [10, 5, 12, 3];
    expect(F.findIndex(F.gt(10), list)).toEqual(2);
    expect(F.findIndex(F.gt(100), list)).toEqual(-1);
  });

  test('transformer', () => {
    const list = [10, 5, 12, 3];
    const transduceList = F.transduce(F.__, (acc, curr) => F.concat(acc, [curr]), [], list);

    expect(transduceList(F.findIndex(F.gt(10)))).toEqual([2]);
    expect(transduceList(F.findIndex(F.gt(100)))).toEqual([-1]);
  });
});

