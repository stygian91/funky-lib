import memoizeWith from "./memoizeWith";

test("it caches results and doesn't call the function with the same arguments twice", () => {
  let callCounter = 0;
  const func = (a, b) => {
    callCounter++;
    return a + b;
  };

  const keyGenerator = argList => {
    return JSON.stringify(argList);
  };

  const memoizedFunc = memoizeWith(keyGenerator, func);

  expect(callCounter).toBe(0);

  const res1 = memoizedFunc(1, 2);
  expect(callCounter).toBe(1);
  expect(res1).toBe(3);

  const res2 = memoizedFunc(1, 2);
  expect(callCounter).toBe(1);
  expect(res2).toBe(3);

  const res3 = memoizedFunc(2, 3);
  expect(callCounter).toBe(2);
  expect(res3).toBe(5);

  const res4 = memoizedFunc(2, 3);
  expect(callCounter).toBe(2);
  expect(res4).toBe(5);
});
