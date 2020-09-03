import defaultTo from "../../src/logic/defaultTo";

test("defaultTo", () => {
  expect(defaultTo(10, null)).toEqual(10);
  expect(defaultTo(20, 30)).toEqual(30);
  expect(defaultTo(5, void 0)).toEqual(5);
});
