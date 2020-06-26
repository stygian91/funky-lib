import unapply from "./unapply";

test("it creates a variadic function from a unary function that takes a list", () => {
  const unary = (list) => list.map((item) => item + 1);
  const variadic = unapply(unary);
  expect(variadic(1, 2, 3)).toEqual([2, 3, 4]);
});
