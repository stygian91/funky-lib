import { curry2, __ } from "../../src/function";

test("curry2", () => {
  const fn = (a, b) => a + b;
  const fnC = curry2(fn);

  expect(fnC("a")("b")).toEqual("ab");
  expect(fnC("a", "b")).toEqual("ab");

  expect(fnC()("a", "b")).toEqual("ab");
  expect(fnC()("a")("b")).toEqual("ab");

  expect(fnC(__)("a")("b")).toEqual("ab");
  expect(fnC(__)("a", "b")).toEqual("ab");

  expect(fnC("a", __)("b")).toEqual("ab");
  expect(fnC(__, "b")("a")).toEqual("ab");

  expect(fnC(__, __)("a", "b")).toEqual("ab");
  expect(fnC(__, __)("a")("b")).toEqual("ab");
});
