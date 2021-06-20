import { lensIndex, view, set, over } from "../../src/object";
import { add } from "../../src/math";

test("lensIndex", () => {
  const myLens = lensIndex(1);
  const data = [42, 111, 321];
  const transformFn = add(100);

  expect(view(myLens, data)).toEqual(111);
  expect(set(myLens, 222, data)).toEqual([42, 222, 321]);
  expect(over(myLens, transformFn, data)).toEqual([42, 211, 321]);
  expect(data).toEqual([42, 111, 321]);
});
