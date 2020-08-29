import { isEmpty } from ".";

test("isEmpty", () => {
  expect(isEmpty(null)).toEqual(false);
  expect(isEmpty(false)).toEqual(false);
  expect(isEmpty(true)).toEqual(false);
  expect(isEmpty(0)).toEqual(false);
  expect(isEmpty(123)).toEqual(false);

  expect(isEmpty([])).toEqual(true);
  expect(isEmpty({})).toEqual(true);
  expect(isEmpty("")).toEqual(true);

  expect(isEmpty([1, 2])).toEqual(false);
  expect(isEmpty({ a: 1 })).toEqual(false);
  expect(isEmpty({ [Symbol("mySymbol")]: "test" })).toEqual(false);
  expect(isEmpty("lorem")).toEqual(false);
});
