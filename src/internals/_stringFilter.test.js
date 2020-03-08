import _stringFilter from "./_stringFilter";

test("it filters strings based on the filter function", () => {
  const str = "abcd";
  const filterFn = (value, key) => value === "a" || key === "3";

  const result = _stringFilter(filterFn, str);
  expect(typeof result).toEqual("string");
  expect(result.length).toEqual(2);
  expect(result).toEqual("ad");
});
