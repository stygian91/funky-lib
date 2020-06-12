import List from "./list";
import Maybe from "./maybe";
import multiply from "../math/multiply";
import {
  expectEquals,
  expectNotEquals,
  expectType,
} from "../internals/_test-helpers";

const expectMaybe = expectType(Maybe);
const expectList = expectType(List);
const expectListEq = expectEquals(List);
const expectListNotEq = expectNotEquals(List);

test("it's a setoid", () => {
  const list1 = new List([1, 2, 3]);
  const list2 = new List([1, 2, 3]);
  const list3 = new List([]);
  const list4 = new List([]);
  const list5 = new List([1, 2]);
  const list6 = new List([10, 15, 123]);
  const list7 = new List([new List([1, 2, 3]), 4, 5]);
  const list8 = new List([new List([1, 2, 3]), 4, 5]);
  const list9 = new List([new List([1, 2]), 4, 5]);

  expectListEq(list1, list2);
  expectListEq(list3, list4);
  expectListNotEq(list1, list5);
  expectListNotEq(list1, list4);
  expectListNotEq(list1, list6);
  expectListEq(list7, list8);
  expectListNotEq(list7, list9);
  expectListNotEq(list1, list9);
});

test("it maps over values", () => {
  const list1 = new List([1, 2, 3]);
  const list2 = new List([10, 20, 30]);
  expectListEq(list2, list1.map(multiply(10)));
});

test("it joins values", () => {
  const list = new List([123, 456]);
  const expected = [123, 456];
  expect(list.join()).toEqual(expected);
});

test("it chains", () => {
  const list = new List([1, 2, 3]);
  expect(list.chain(multiply(10))).toEqual([10, 20, 30]);
});

test("it's traversable", () => {
  const listOfMaybes = new List([Maybe.of(1), Maybe.of(2), Maybe.of(3)]);
  const maybeOfList = listOfMaybes.sequence(Maybe.of);

  expectMaybe(maybeOfList);
  expectList(maybeOfList.join());
  expectListEq(maybeOfList.join(), new List([1, 2, 3]));
});
