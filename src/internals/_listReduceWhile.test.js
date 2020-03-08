import _listReduceWhile from "./_listReduceWhile";

test("it reduces the list only while the condition fn returns a truthy value", () => {
  const subtractWhileNotNegative = _listReduceWhile(
    (acc, current) => acc - current >= 0,
    (acc, current) => acc - current
  );

  const list = [1, 2, 3, 4];
  expect(subtractWhileNotNegative(10, list)).toBe(0);
  expect(subtractWhileNotNegative(11, list)).toBe(1);
  expect(subtractWhileNotNegative(5, list)).toBe(2);
});
