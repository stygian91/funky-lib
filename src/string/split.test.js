import split from './split';

test('it splits a string into an array based on the delimiter', () => {
  const splitBySpace = split(' ');
  const wordArray = splitBySpace('lorem ipsum dolor');

  expect(wordArray.length).toBe(3);
  expect(wordArray[0]).toBe('lorem');
  expect(wordArray[1]).toBe('ipsum');
  expect(wordArray[2]).toBe('dolor');
});
