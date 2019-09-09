import has from './has';
import __ from '../function/placeholderArgument';

test('returns whether the object has an own property', () => {
  const mySymbol = Symbol('mySymbol');
  const object = { a: 1, b: 2, c: 3, [mySymbol]: 4 };
  const objectHas = has(__, object);
  expect(objectHas('a')).toEqual(true);
  expect(objectHas(mySymbol)).toEqual(true);
  expect(objectHas('d')).toEqual(false);
});
