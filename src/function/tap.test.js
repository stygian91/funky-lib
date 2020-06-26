import tap from "./tap";

test("runs a function on an argument and then returns that argument", () => {
  const obj = { a: 1, b: 2 };
  const func = (obj) => {
    obj.a++;
  };

  const result = tap(func, obj);
  expect(result.a).toBe(2);
  expect(result.b).toBe(2);
});
