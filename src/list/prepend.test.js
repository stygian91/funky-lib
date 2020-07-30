import { prepend } from "./";

test("prepend", () => {
  const list = ["ipsum", "sit"];
  expect(prepend("lorem", list)).toEqual(["lorem", "ipsum", "sit"]);
  expect(list).toEqual(["ipsum", "sit"]);
});
