import * as F from '../../src';

describe('transduce', () => {
  const step = (acc, curr) => F.concat(acc, [curr]);

  test('simple', () => {
    const transducer = (transformer) => {
      const newStep = function(acc, curr, index, _list) {
        return transformer.step(acc, curr + 1, index, _list);
      }

      return new F.Transformer(newStep, transformer.init);
    };
    const res = F.transduce(transducer, step, [], [1, 2, 3, 4]);
    expect(res).toEqual([2, 3, 4, 5]);
  });

  test('filter + map', () => {
    const transducer = F.compose(
      F.filter((value, index) => value + index > 4),
      F.map((value, index) => ({ value: value + index }))
    );

    const res = F.transduce(transducer, step, [], [1, 2, 3, 4]);
    expect(res).toEqual([{ value: 5 }, { value: 7 }]);
  });
});

