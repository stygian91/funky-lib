import reduce from "./reduce";

test("it accumulates a result by calling the function over the list", () => {
  const list = [1, 2, 3, 4];
  const sum = reduce((accumulator, current) => accumulator + current, 0, list);
  expect(sum).toBe(10);
});
