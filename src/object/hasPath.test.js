import hasPath from "./hasPath";
import __ from "../function/placeholderArgument";
import compose from "../function/compose";

test("hasPath", () => {
  const obj = { a: { b: { c: 123 } } };
  const expectHasPath = compose(expect, hasPath(__, obj));
  expectHasPath("asd").toEqual(false);
  expectHasPath("a").toEqual(true);
  expectHasPath("a.b").toEqual(true);
  expectHasPath("a.b.c").toEqual(true);
});
