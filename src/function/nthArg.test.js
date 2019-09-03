import nthArg from './nthArg';

test('it returns the nth argument', () => {
  expect(nthArg(0)(1, 2, 3)).toEqual(1);
  expect(nthArg(1)(1, 2, 3)).toEqual(2);
  expect(nthArg(2)(1, 2, 3)).toEqual(3);

  expect(nthArg(-1)(1, 2, 3)).toEqual(3);
  expect(nthArg(-2)(1, 2, 3)).toEqual(2);
  expect(nthArg(-3)(1, 2, 3)).toEqual(1);
});
