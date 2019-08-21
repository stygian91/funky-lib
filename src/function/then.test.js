import then from './then';

test('it applies onSuccess to the promise', () => {
  const onSuccess = (result) => {
    return (result + 1);
  };

  const promise = new Promise(resolve => resolve(5));

  const newPromise = then(onSuccess, promise);
  return expect(newPromise).resolves.toEqual(6);
});
