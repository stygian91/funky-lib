import _stringReduceWhile from "../../src/internals/_stringReduceWhile";
import lte from "../../src/logic/lessThanOrEqual";
import __ from "../../src/function/placeholderArgument";

test("it reduces while the condition function returns a truthy value", () => {
  const str = "abcd";

  const addWhileLessThan500 = _stringReduceWhile(
    (accumulator, current) => lte(500, accumulator + current.charCodeAt(0)),
    (accumulator, current) => accumulator + current.charCodeAt(0),
    __,
    str
  );

  expect(addWhileLessThan500(0)).toEqual(394);
  expect(addWhileLessThan500(107)).toEqual(401);
  expect(addWhileLessThan500(404)).toEqual(404);
});
