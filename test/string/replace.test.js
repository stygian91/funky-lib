import replace from "../../src/string/replace";

test("replace", () => {
  expect(replace("foo", "bar", "foo foo")).toEqual("bar foo");
  expect(replace(/foo/g, "bar", "foo foo")).toEqual("bar bar");
});
