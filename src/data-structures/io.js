import compose from "../function/compose";

/**
 * The IO monad - defers execution.
 *
 * @class
 * @name IO
 */
export default class IO {
  constructor(fn) {
    this.fn = fn;
  }

  static of(x) {
    return new IO(() => x);
  }

  run() {
    return this.fn();
  }

  map(fn) {
    return new IO(compose(fn, this.fn));
  }

  asyncMap(fn) {
    return new IO(async () => {
      const res = await Promise.resolve(this.fn());
      return await Promise.resolve(fn(res));
    });
  }
}
