import modulo from "../../src/math/modulo";

test("it returns the remainder of a division", () => {
  expect(modulo(5, 5)).toEqual(0);
  expect(modulo(5, 8)).toEqual(3);
  expect(modulo(8, 5)).toEqual(5);
  expect(() => modulo(0, 5)).toThrow();
});
