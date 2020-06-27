import ap from "./ap";
import multiply from "../math/multiply";
import add from "../math/add";
import concat from "../list/concat";
import { expectValue } from "../internals/_test-helpers";
import Identity from "../data-structures/identity";

const expectIdentityVal = expectValue(Identity);

test("ap", () => {
  // defers to the ap method if available:
  expectIdentityVal(10, ap(Identity.of(add(5)), Identity.of(5)));
  // if args are functions, ap(binary, unary)(x) === binary(x, unary(x)):
  expect(ap(concat, (x) => x.toUpperCase())("Funky")).toEqual("FunkyFUNKY");
  // applies a list of functions to a list of values
  expect(ap([multiply(2), add(3)], [1, 2, 3])).toEqual([2, 4, 6, 4, 5, 6]);
});
