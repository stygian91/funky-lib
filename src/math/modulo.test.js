import modulo from "./modulo";

test("it returns the remainder of a division", () => {
  expect(modulo(5, 5)).toEqual(0);
  expect(modulo(8, 5)).toEqual(3);
  expect(modulo(5, 8)).toEqual(5);
});
