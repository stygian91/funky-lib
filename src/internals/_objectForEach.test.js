import _objectForEach from './_objectForEach';

test("it iterates over an object's string and symbol props in that order", () => {
  const results = [];

  const mySymbol = Symbol('mySymbol');
  const mySymbol2 = Symbol('mySymbol2');

  const object = {
    a: 1,
    b: 2,
    [mySymbol]: 3,
  };

  Object.defineProperty(object, mySymbol2, {
    value: 4,
    enumerable: false,
    writable: true,
  });

  const expectedValues = [
    { key: 'a', value: 1, object },
    { key: 'b', value: 2, object },
    { key: mySymbol, value: 3, object }
  ];

  _objectForEach((value, key, obj) => results.push({ key, value, object: obj }), object);

  expect(results.length).toEqual(3);
  results.forEach((result, index) => {
    expect(result.key).toEqual(expectedValues[index].key);
    expect(result.value).toEqual(expectedValues[index].value);
    expect(result.object).toEqual(expectedValues[index].object);
  })
});
