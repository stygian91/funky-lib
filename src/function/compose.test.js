import compose from "./compose";

test("composes results from right to left", () => {
  const add2 = (a) => a + 2;
  const mul2 = (a) => a * 2;
  const add4 = (a) => a + 4;

  const operation = compose(add2, mul2, add4);

  expect(operation(1)).toBe(12);
  expect(compose()).toThrow();
});
