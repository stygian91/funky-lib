const pipe = require('../src/pipe');

test('pipes results from left to right', () => {
  const add2 = a => a + 2;
  const mul2 = a => a * 2;
  const add4 = a => a + 4;

  const operation = pipe(
    add2,
    mul2,
    add4
  );

  expect(operation(1)).toBe(10);
  expect(pipe()).toThrow();
});
