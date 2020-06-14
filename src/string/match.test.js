import match from "./match";

test("match", () => {
  const results1 = match(/(lorem)/, "asd lorem");
  expect(Array.isArray(results1)).toEqual(true);
  expect(results1[1]).toEqual("lorem");
  const results2 = match(/(asdqwe)/, "zxc");
  expect(results2).toEqual(null);
});
