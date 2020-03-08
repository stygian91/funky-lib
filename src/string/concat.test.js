import concat from "./concat";

test("it concatenates 2 strings", () => {
  const left = "lorem";
  const right = "ipsum";
  const arr = ["qwe"];

  const result = concat(left, right);
  expect(result).toBe("loremipsum");
  expect(() => concat(left, arr)).toThrow();
});
