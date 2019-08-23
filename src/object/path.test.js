import path from './path';

test('retrieves a prop from an object with the provided path', () => {
  const object = {
    a: {
      b: {
        c: 123,
      }
    }
  };

  expect(path('a.b.c', object)).toBe(123);
  expect(path(['a', 'b', 'c'], object)).toBe(123);
  expect(typeof path('asd', object)).toBe('undefined');
});
