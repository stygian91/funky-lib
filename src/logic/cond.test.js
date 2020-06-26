import cond from "./cond";

test("it executes the transform function of the first matching pair", () => {
  const a = 15;
  const b = 25;
  const c = 5;
  const pairs = [
    [(a) => a < 10, (a) => a + 1],
    [(a) => a < 20, (a) => a + 2],
  ];

  const testCond = cond(pairs);
  const result = testCond(a);
  const result2 = testCond(b);
  const result3 = testCond(c);
  expect(result).toEqual(17);
  expect(typeof result2).toEqual("undefined");
  expect(result3).toEqual(6);
});
