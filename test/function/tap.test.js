import * as F from '../../src';
import { expect, test, describe } from 'vitest';

describe('tap', () => {
  test("runs a function on an argument and then returns that argument", () => {
    const example = "lorem";
    let result;
    const func = (string) => {
      result = `${string} ipsum`;
    };

    const output = F.tap(func, example);
    expect(output).toEqual("lorem");
    expect(result).toEqual("lorem ipsum");
  });

  test('transducer', () => {
    const example = "lorem";
    let result = example;
    const func = (string) => {
      result = `${result} ${string}`;
    };

    const res = F.transduce(F.tap(func), (acc, curr) => F.append(curr, acc), [], [1, 2]);
    expect(res).toEqual([1, 2]);
    expect(result).toEqual("lorem 1 2");
    expect(example).toEqual("lorem");
  });
});
