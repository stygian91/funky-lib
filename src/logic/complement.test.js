import complement from "./complement";

test("returns the opposite 'truthy' or 'falsy' value to the provided function", () => {
  const check = (a) => a > 5;
  const oppositeCheck = complement(check);
  expect(oppositeCheck(1)).toBe(true);
  expect(oppositeCheck(5)).toBe(true);
  expect(oppositeCheck(6)).toBe(false);
});
