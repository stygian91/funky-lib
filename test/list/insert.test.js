import insert from "../../src/list/insert";

test("insert", () => {
  const original = [0, 2, 3, 5];
  expect(insert(1, 1, original)).toEqual([0, 1, 2, 3, 5]);
  expect(original).toEqual([0, 2, 3, 5]);
});
