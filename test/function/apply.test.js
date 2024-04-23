import apply from "../../src/function/apply";
import { expect, test } from 'vitest';

test("it applies the list of arguments to the function", () => {
  let func = (a, b) => a + b;
  const result = apply(func, [1, 2]);
  expect(result).toEqual(3);
});

test("it passes undefined as default context", () => {
  let func = function () {
    return this;
  };
  const result = apply(func, []);
  expect(typeof result).toEqual("undefined");
});

test("it doesn't change a bound function's context", () => {
  let obj = {};
  let func = function () {
    this.someproperty = "test";
  }.bind(obj);
  apply(func, []);
  expect(obj.someproperty).toEqual("test");
});
