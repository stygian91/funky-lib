import _stringMap from './_stringMap';

test("it maps over a string's characters", () => {
  const func = (item) => String.fromCharCode(item.charCodeAt(0) + 1);
  const string = 'abc';
  expect(_stringMap(func, string)).toEqual('bcd');
});
