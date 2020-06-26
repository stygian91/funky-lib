import splice from "./splice";

test("splice", () => {
  const original = [1, 2, 3, 4, 5];
  expect(splice(1, 0, [7, 8, 9], original)).toEqual([1, 7, 8, 9, 2, 3, 4, 5]);
  expect(original).toEqual([1, 2, 3, 4, 5]);
  expect(splice(1, 0, [], original)).toEqual([1, 2, 3, 4, 5]);
});
