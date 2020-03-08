import pathSatisfies from "./pathSatisfies";
import gt from "../logic/greaterThan";
import __ from "../function/placeholderArgument";

test("the condition function is called with the prop at the specified path", () => {
  const object1 = {
    a: {
      b: 123
    }
  };

  const object2 = {
    a: {
      b: 1
    }
  };

  const aBIsLargerThan100 = pathSatisfies(gt(__, 100), "a.b");

  expect(aBIsLargerThan100(object1)).toBe(true);
  expect(aBIsLargerThan100(object2)).toBe(false);
});
