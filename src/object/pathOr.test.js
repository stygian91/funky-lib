import pathOr from './pathOr';

test('retrieves the value at the specified path, otherwise returns the default', () => {
  const object = {
    a: {
      b: {
        c: 321
      }
    }
  };

  expect(pathOr(111, 'a.b.c', object)).toBe(321);
  expect(pathOr(111, 'asd', object)).toBe(111);
});
