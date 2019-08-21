import otherwise from './otherwise';

test('it applies onFailure to the promise', () => {
  const onFailure = (error) => {
    throw new Error(error.message + '4');
  };

  const promise = new Promise((resolve, reject) => reject(new Error('123')));

  const newPromise = otherwise(onFailure, promise);
  return expect(newPromise).rejects.toThrow('1234');
});
