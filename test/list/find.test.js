import find from "../../src/list/find";
import propEq from "../../src/object/propEq";

test("finds an element in a list", () => {
  const list = [
    {
      value: 1,
      index: 0,
    },
    {
      value: 2,
      index: 1,
    },
    {
      value: 1,
      index: 2,
    },
  ];

  const findOne = find(propEq("value", 1));

  const result = findOne(list);
  expect(result).toEqual({ value: 1, index: 0 });
});

test("finds an element in an object", () => {
  const object = {
    foo: 42,
    bar: 42,
    lorem: 7,
  };

  expect(find((val, key) => val === 42 && key === 'bar', object)).toEqual(42);
  expect(find((val, key) => key === 'lorem', object)).toEqual(7);
  expect(find((val) => val === 123, object)).toEqual(null);
});
