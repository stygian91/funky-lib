import Identity from "./identity";
import List from "./list";
import add from "../math/add";
import { expectValue, expectType } from "../internals/_test-helpers";

const expectIdentity = expectType(Identity);
const expectIdentityVal = expectValue(Identity);
const expectList = expectType(List);

test("it's a setoid", () => {
  expectIdentityVal(123, Identity.of(123));
});

test("it's a functor", () => {
  expectIdentityVal(20, Identity.of(10).map(add(10)));
});

test("it's an applicative", () => {
  expectIdentityVal(10, Identity.of(add(5)).ap(Identity.of(5)));
});

test("it joins", () => {
  expect(Identity.of(5).join()).toEqual(5);
});

test("it chains", () => {
  expect(Identity.of(5).chain(add(3))).toEqual(8);
});

test("it's traversable", () => {
  const arr = [1, 2, 3];
  const idOfList = Identity.of(new List(arr));
  const listOfIds = idOfList.sequence(List.of);
  expectList(listOfIds);
  const arrOfIds = listOfIds.join();
  arrOfIds.forEach((id, idx) => {
    expectIdentity(id);
    expectIdentityVal(arr[idx], id);
  });
});
