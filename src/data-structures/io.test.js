import IO from "./io";
import Identity from "./identity";

test("IO", () => {
  let obj = { a: 1 };
  const io = new IO(() => {
    obj.a = 2;
  });

  expect(obj.a).toEqual(1);
  io.run();
  expect(obj.a).toEqual(2);

  const ioOfObj = IO.of(obj);
  const obj2 = ioOfObj.run();
  expect(obj2.a).toEqual(obj.a);

  const io2 = ioOfObj.map((x) => x.a + 5);
  expect(io2.run()).toEqual(7);
});
