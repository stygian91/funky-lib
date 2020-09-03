import { keyWith } from "../../src/list";
import { prop } from "../../src/object";

test("keyWith", () => {
  const list = [
    { id: 1, value: 123 },
    { id: 2, value: 345 },
    { id: 3, value: 456 },
    // this will ovewrite the previous value
    { id: 3, value: 567 },
  ];

  expect(keyWith(prop("id"), list)).toEqual({
    "1": { id: 1, value: 123 },
    "2": { id: 2, value: 345 },
    "3": { id: 3, value: 567 },
  });
});
