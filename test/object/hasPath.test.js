import hasPath from "../../src/object/hasPath";
import __ from "../../src/function/placeholderArgument";
import compose from "../../src/function/compose";

test("hasPath", () => {
  const obj = { a: { b: { c: 123 } } };
  const expectHasPath = compose(expect, hasPath(__, obj));
  expectHasPath("asd").toEqual(false);
  expectHasPath("a").toEqual(true);
  expectHasPath("a.b").toEqual(true);
  expectHasPath("a.b.c").toEqual(true);
});
