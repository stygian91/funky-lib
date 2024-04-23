// import find from "../../src/list/find";
// import propEq from "../../src/object/propEq";
import * as F from "../../src";
import { expect, test, describe } from 'vitest';

describe("find", () => {
  test("finds an element in a list", () => {
    const list = [
      {
        value: 1,
        index: 0,
      },
      {
        value: 2,
        index: 1,
      },
      {
        value: 1,
        index: 2,
      },
    ];

    const findOne = F.find(F.propEq("value", 1));

    const result = findOne(list);
    expect(result).toEqual({ value: 1, index: 0 });
    expect(list).toEqual([
      {
        value: 1,
        index: 0,
      },
      {
        value: 2,
        index: 1,
      },
      {
        value: 1,
        index: 2,
      },
    ]);
  });

  test("finds an element in an object", () => {
    const object = {
      foo: 42,
      bar: 42,
      lorem: 7,
    };

    expect(F.find((val, key) => val === 42 && key === "bar", object)).toEqual(
      42
    );
    expect(F.find((val, key) => key === "lorem", object)).toEqual(7);
    expect(F.find((val) => val === 123, object)).toEqual(null);
  });

  test("acts as a transducer", () => {
    const list = [{ a: 1 }, { a: 2 }, { a: 3 }];

    const res = F.transduce(
      F.find(F.propEq("a", 2)),
      (acc, curr) => F.concat(acc, [curr]),
      [],
      list
    );

    expect(res).toEqual([{ a: 2 }]);
  });
});
