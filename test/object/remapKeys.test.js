import { remapKeys } from "../../src/object";

test("remapKeys", () => {
  const obj = {
    key1: "value1",
    key2: "value2",
  };

  expect(remapKeys({ key1: "newKey1", key2: "newKey2" }, obj)).toEqual({
    newKey1: "value1",
    newKey2: "value2",
  });

  expect(remapKeys({ key1: "newKey1" }, obj)).toEqual({
    newKey1: "value1",
    key2: "value2",
  });

  expect(remapKeys({ key1: "newKey1", nonExistent: "newKey123" }, obj)).toEqual(
    {
      newKey1: "value1",
      key2: "value2",
    }
  );

  expect(obj).toEqual({
    key1: "value1",
    key2: "value2",
  });
});
