import assocPath from "../../src/object/assocPath";

test("assocPath", () => {
  const orig = { a: { b: { c: 0 } } };
  const expected = { a: { b: { c: 42 } } };

  expect(assocPath("a.b.c", 42, orig)).toEqual(expected);
  expect(assocPath(["a", "b", "c"], 42, orig)).toEqual(expected);
  expect(assocPath(["a", "b", "c"], 42, { a: 5 })).toEqual(expected);
});
