import keys from "./_keys";

test("keys", () => {
  const mySymbol = Symbol("mySymbol");
  const obj = { a: 1, [mySymbol]: 2 };

  expect(keys(obj)).toEqual(["a", mySymbol]);
  expect(obj).toEqual({ a: 1, [mySymbol]: 2 });

  expect(() => keys("lorem")).toThrow();
});
