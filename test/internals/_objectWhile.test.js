import _objectWhile from "../../src/internals/_objectWhile";
import always from "../../src/function/always";
import { expect, test } from 'vitest';

test("it iterates through the object properties while the condition is true", () => {
  const results = [];

  const mySymbol = Symbol("mySymbol");

  const object = {
    a: 1,
    b: 2,
    [mySymbol]: 3,
  };

  const expectedValues = [
    { key: "a", value: 1, object },
    { key: "b", value: 2, object },
  ];

  _objectWhile(
    (value, key, obj) => key !== mySymbol,
    (value, key, obj) => results.push({ key, value, object: obj }),
    object
  );

  expect(results.length).toEqual(2);
  results.forEach((result, index) => {
    expect(result.key).toEqual(expectedValues[index].key);
    expect(result.value).toEqual(expectedValues[index].value);
    expect(result.object).toEqual(expectedValues[index].object);
  });
});

test("it iterates over everything if the condition function always returns true", () => {
  const results = [];

  const mySymbol = Symbol("mySymbol");

  const object = {
    a: 1,
    b: 2,
    [mySymbol]: 3,
  };

  const expectedValues = [
    { key: "a", value: 1, object },
    { key: "b", value: 2, object },
    { key: mySymbol, value: 3, object },
  ];

  _objectWhile(
    always(true),
    (value, key, obj) => results.push({ key, value, object: obj }),
    object
  );

  expect(results.length).toEqual(3);
  results.forEach((result, index) => {
    expect(result.key).toEqual(expectedValues[index].key);
    expect(result.value).toEqual(expectedValues[index].value);
    expect(result.object).toEqual(expectedValues[index].object);
  });
});
