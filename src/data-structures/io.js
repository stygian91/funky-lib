import compose from "../function/compose";

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
}
