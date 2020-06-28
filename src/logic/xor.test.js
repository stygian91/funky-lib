import xor from "./xor";

test("xor", () => {
  expect(xor(false, false)).toEqual(false);
  expect(xor(true, false)).toEqual(true);
  expect(xor(false, true)).toEqual(true);
  expect(xor(true, true)).toEqual(false);
});
