import find from "./find";
import propEq from "../object/propEq";

test("it returns the first found element that matches the condition function", () => {
  const list = [
    {
      value: 1,
      index: 0
    },
    {
      value: 2,
      index: 1
    },
    {
      value: 1,
      index: 2
    }
  ];

  const findOne = find(propEq("value", 1));

  const result = findOne(list);
  expect(result).toEqual({ value: 1, index: 0 });
});
