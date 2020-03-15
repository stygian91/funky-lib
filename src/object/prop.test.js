import prop from "./prop";

test("it returns a property from an object", () => {
  expect(prop("length", [1, 2]).join()).toBe(2);
  expect(prop("a", { a: 1 }).join()).toBe(1);
});
