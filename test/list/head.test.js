import { head } from "../../src/list";

test("head", () => {
  expect(head("qwery")).toEqual("q");
  expect(head([2, 3, 4])).toEqual(2);
});
