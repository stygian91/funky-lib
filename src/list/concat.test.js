import concat from "./concat";

test('it concatenates two arrays', () => {
  const left = [1, 2];
  const right = [3, 4];
  const string = '5, 6';

  const result = concat(left, right);

  expect(result.length).toBe(4);
  expect(result[0]).toBe(1);
  expect(result[1]).toBe(2);
  expect(result[2]).toBe(3);
  expect(result[3]).toBe(4);
  expect(() => concat(left, string)).toThrow();
});
