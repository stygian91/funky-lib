const pipe = require('../src/pipe');

test('pipes results from left to right', () => {
  const add2 = a => a + 2;
  const sub3 = a => a - 3;
  const add4 = a => a + 4;

  const operation = pipe(
    add2,
    sub3,
    add4
  );

  expect(operation(1)).toBe(4);
  expect(pipe()).toThrow();
});
