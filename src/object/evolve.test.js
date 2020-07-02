import evolve from "./evolve";
import add from "../math/add";

test("evolve", () => {
  const obj = { a: 1, b: { c: 2 }, d: [3, 4], e: 5 };
  const transform = { a: add(1), b: { c: add(2) }, d: [add(3), add(4)] };

  expect(evolve(transform, obj)).toEqual({
    a: 2,
    b: { c: 4 },
    d: [6, 8],
    e: 5,
  });
  expect(obj).toEqual({ a: 1, b: { c: 2 }, d: [3, 4], e: 5 });
});
