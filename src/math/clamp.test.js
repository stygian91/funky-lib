import clamp from "./clamp";

test("it restricts values to a range", () => {
  expect(clamp(1, 10, -1)).toEqual(1);
  expect(clamp(1, 10, 11)).toEqual(10);
  expect(clamp(1, 10, 10)).toEqual(10);
  expect(clamp(1, 10, 5)).toEqual(5);
  expect(clamp(1, 10, 1)).toEqual(1);
});
