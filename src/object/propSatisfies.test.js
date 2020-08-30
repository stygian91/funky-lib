import propSatisfies from "./propSatisfies";
import gt from "../logic/greaterThan";
import __ from "../function/placeholderArgument";

test("applies the predicate to the prop and returns its result", () => {
  const object = {
    a: 1,
    b: 2,
  };

  const isPropGTOne = propSatisfies(gt(1), __, object);

  expect(isPropGTOne("a")).toBe(false);
  expect(isPropGTOne("b")).toBe(true);
});
