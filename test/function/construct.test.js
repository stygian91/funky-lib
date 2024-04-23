import construct, { constructN } from "../../src/function/construct";
import apply from "../../src/function/apply";
import slice from "../../src/list/slice";
import { expect, test } from 'vitest';

test("constructN", () => {
  const args = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const classes = [
    function Obj0() {
      this.a0 = 0;
    },

    function Obj1(a0) {
      this.a0 = a0;
    },

    function Obj2(a0, a1) {
      this.a0 = a0;
      this.a1 = a1;
    },

    function Obj3(a0, a1, a2) {
      this.a0 = a0;
      this.a1 = a1;
      this.a2 = a2;
    },

    function Obj4(a0, a1, a2, a3) {
      this.a0 = a0;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
    },

    function Obj5(a0, a1, a2, a3, a4) {
      this.a0 = a0;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
      this.a4 = a4;
    },

    function Obj6(a0, a1, a2, a3, a4, a5) {
      this.a0 = a0;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
      this.a4 = a4;
      this.a5 = a5;
    },

    function Obj7(a0, a1, a2, a3, a4, a5, a6) {
      this.a0 = a0;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
      this.a4 = a4;
      this.a5 = a5;
      this.a6 = a6;
    },

    function Obj8(a0, a1, a2, a3, a4, a5, a6, a7) {
      this.a0 = a0;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
      this.a4 = a4;
      this.a5 = a5;
      this.a6 = a6;
      this.a7 = a7;
    },

    function Obj9(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
      this.a0 = a0;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
      this.a4 = a4;
      this.a5 = a5;
      this.a6 = a6;
      this.a7 = a7;
      this.a8 = a8;
    },

    function Obj10(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      this.a0 = a0;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
      this.a4 = a4;
      this.a5 = a5;
      this.a6 = a6;
      this.a7 = a7;
      this.a8 = a8;
      this.a9 = a9;
    },
  ];

  const construct0 = constructN(0, classes[0]);
  const obj0 = construct0();
  expect(obj0.a0).toEqual(0);

  for (let index = 1; index <= 10; index++) {
    const construct1 = constructN(index, classes[index]);
    const constructArgs = slice(0, index, args);
    const obj = apply(construct1, constructArgs);

    for (let j = 0; j < index; j++) {
      expect(obj[`a${j}`]).toEqual(j);
    }
  }

  expect(() => constructN(-1, classes[0])).toThrow();
  expect(() => constructN(11, classes[0])).toThrow();

  const objConstructor = construct(classes[2]);
  const obj2 = objConstructor(123)(456);
  expect(obj2.a0).toEqual(123);
  expect(obj2.a1).toEqual(456);
});
