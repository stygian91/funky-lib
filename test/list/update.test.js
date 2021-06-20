import { update } from "../../src/list";

test("update", () => {
  const list = [100, 200, 300];

  expect(update(1, 42, list)).toEqual([100, 42, 300]);
  expect(list).toEqual([100, 200, 300]);
});
