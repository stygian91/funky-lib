import slice from "../../src/list/slice";

test("it slices a list or string", () => {
  const list = [1, 2, 3];
  const string = "123";

  const sliceSecondTwo = slice(1, 3);

  const listResult = sliceSecondTwo(list);
  expect(listResult).toEqual([2, 3]);

  const stringResult = sliceSecondTwo(string);
  expect(stringResult).toEqual("23");
});
