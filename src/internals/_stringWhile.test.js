import _stringWhile from "./_stringWhile";

test("it loops over a string's characters while the condition is true", () => {
  let result = "";
  const func = item => {
    result = result.concat(String.fromCharCode(item.charCodeAt(0) + 1));
  };
  const condFn = item => item.charCodeAt(0) <= "c".charCodeAt(0);
  const string = "abcd";
  _stringWhile(condFn, func, string);
  expect(result).toEqual("bcd");
});
