import propSatisfies from "../../src/object/propSatisfies";
import gt from "../../src/logic/greaterThan";
import __ from "../../src/function/placeholderArgument";
import { expect, test } from 'vitest';

test("applies the predicate to the prop and returns its result", () => {
  const object = {
    a: 1,
    b: 2,
  };

  const isPropGTOne = propSatisfies(gt(1), __, object);

  expect(isPropGTOne("a")).toBe(false);
  expect(isPropGTOne("b")).toBe(true);
});
