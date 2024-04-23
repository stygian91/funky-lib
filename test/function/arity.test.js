import { arity } from "../../src/function";
import { expect, test } from 'vitest';

test("it changes the arity of a function", () => {
  const func = (a) => a;

  for (let index = 0; index <= 10; index++) {
    const newArityFunc = arity(index, func);
    expect(newArityFunc.length).toEqual(index);
    expect(newArityFunc(1)).toEqual(1);
  }

  expect(() => arity(11, func)).toThrow();
});
