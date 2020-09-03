import { applyTo } from "../../src/function";

test("applyTo", () => {
  const applyTo7 = applyTo(7);
  expect(applyTo7((x) => x + 5)).toEqual(12);
  expect(applyTo7((x) => x % 2)).toEqual(1);
});
