import { values } from "../../src/object";

test("values", () => {
  const mySymbol = Symbol("mySymbol");
  const obj = { a: 1, [mySymbol]: 2 };

  expect(values(obj)).toEqual([1, 2]);
  expect(obj).toEqual({ a: 1, [mySymbol]: 2 });
});
