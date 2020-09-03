import _objectMap from "../../src/internals/_objectMap";

test("it maps over an object's enumerable string and symbol keys", () => {
  const mySymbol = Symbol("my-symbol");
  const mySymbol2 = Symbol("my-symbol2");

  const obj = {
    a: 1,
    b: 2,
    [mySymbol]: 4,
  };

  Object.defineProperty(obj, "c", {
    value: 3,
    enumerable: false,
    writable: true,
  });

  Object.defineProperty(obj, mySymbol2, {
    value: 5,
    enumerable: false,
    writable: true,
  });

  const expected = { a: 2, b: 3, [mySymbol]: 5 };
  expect(_objectMap((value) => ++value, obj)).toEqual(expected);
});
