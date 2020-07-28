import { reverse } from "./";

test("reverse", () => {
  expect(reverse("abc")).toEqual("cba");
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});
