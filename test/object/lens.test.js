import lens, { lensSymbol } from "../../src/object/lens";
import path from "../../src/object/path";

test("lens", () => {
  const getter = (obj) => obj.foo;
  const setter = (val, obj) => ({ ...obj, foo: val })

  const myLens = lens(getter, setter);
  expect(path([lensSymbol, 'getter'], myLens)).toEqual(getter);
  expect(path([lensSymbol, 'setter'], myLens)).toEqual(setter);
});
