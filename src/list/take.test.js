import take from "./take";

test("it takes the first N elements from a list", () => {
  const list = [1, 2, 3, 4];
  expect(take(2, list)).toEqual([1, 2]);
});
