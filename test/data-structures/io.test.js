import IO from "../../src/data-structures/io";

test("IO", async () => {
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

  // map:
  const io2 = ioOfObj.map((x) => x.a + 5);
  expect(io2.run()).toEqual(7);

  // asyncMap:
  const asyncFn = () => new Promise((resolve) => setTimeout(() => resolve(100), 10));
  const asyncFn2 = (num) => new Promise((resolve) => setTimeout(() => resolve(num + 10), 10));

  const io3 = new IO(asyncFn).asyncMap((num) => num + 10);
  const io3Res = await io3.run();
  expect(io3Res).toEqual(110);

  const io4 = new IO(asyncFn).asyncMap(asyncFn2);
  const io4Res = await io4.run();
  expect(io4Res).toEqual(110);
});
