import replace from "../../src/string/replace";
import { expect, test } from 'vitest';

test("replace", () => {
  expect(replace("foo", "bar", "foo foo")).toEqual("bar foo");
  expect(replace(/foo/g, "bar", "foo foo")).toEqual("bar bar");
});
