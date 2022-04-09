import * as F from "../../src";

test("curry3", function () {
  const f = function (a, b, c) {
    return [a, b, c];
  };
  const g = F.curry3(f);

  expect(g()(1, 2, 3)).toEqual([1, 2, 3]);
  expect(g(1)(2)(3)).toEqual([1, 2, 3]);
  expect(g(1)(2, 3)).toEqual([1, 2, 3]);
  expect(g(1, 2)(3)).toEqual([1, 2, 3]);
  expect(g(1, 2, 3)).toEqual([1, 2, 3]);

  expect(g(F.__, 2, 3)(1)).toEqual([1, 2, 3]);
  expect(g(F.__, 2)(1, 3)).toEqual([1, 2, 3]);
  expect(g(1, F.__, 3)(2)).toEqual([1, 2, 3]);
  expect(g(1, F.__)(2, 3)).toEqual([1, 2, 3]);
  expect(g(1, 2, F.__)(3)).toEqual([1, 2, 3]);

  expect(g(1, F.__, F.__)(2)(3)).toEqual([1, 2, 3]);
  expect(g(F.__, 2, F.__)(1)(3)).toEqual([1, 2, 3]);
  expect(g(F.__, F.__, 3)(1)(2)).toEqual([1, 2, 3]);

  expect(g(1, F.__, F.__)(2, 3)).toEqual([1, 2, 3]);
  expect(g(F.__, 2, F.__)(1, 3)).toEqual([1, 2, 3]);
  expect(g(F.__, F.__, 3)(1, 2)).toEqual([1, 2, 3]);

  expect(g(1, F.__, F.__)(F.__, 3)(2)).toEqual([1, 2, 3]);
  expect(g(F.__, 2, F.__)(F.__, 3)(1)).toEqual([1, 2, 3]);
  expect(g(F.__, F.__, 3)(F.__, 2)(1)).toEqual([1, 2, 3]);

  expect(g(F.__, F.__, F.__)(F.__, F.__)(F.__)(1, 2, 3)).toEqual([1, 2, 3]);
  expect(g(F.__, F.__, F.__)(1, F.__, F.__)(F.__, F.__)(2, F.__)(F.__)(3)).toEqual([1, 2, 3]);

});
