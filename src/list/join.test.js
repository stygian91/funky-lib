import join from "./join";

test('it joins array elements with the specified glue', () => {
  const list = ['1', '2'];

  expect(join(', ', list)).toBe('1, 2');
});
