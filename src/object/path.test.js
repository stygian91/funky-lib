import path from "./path";
import Maybe from "../data-structures/maybe";

test("retrieves a prop from an object with the provided path", () => {
  const object = {
    a: {
      b: {
        c: 123
      }
    }
  };

  expect(path("a.b.c", object) instanceof Maybe).toEqual(true);
  expect(path("a.b.c", object).join()).toBe(123);
  expect(path(["a", "b", "c"], object).join()).toBe(123);
  expect(path("asd", object).isNothing).toBe(true);
});
