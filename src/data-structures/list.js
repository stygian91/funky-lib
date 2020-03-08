import equals from "../logic/equals";
import reduceWhile from "../list/reduceWhile";

export default class List {
  static of(x) {
    return new List([x]);
  }

  constructor(xs) {
    this.$value = xs;
  }

  concat(x) {
    return new List(this.$value.concat(x));
  }

  equals(other) {
    if (
      !(other instanceof List) ||
      this.$value.length !== other.$value.length
    ) {
      return false;
    }

    return reduceWhile(
      acc => acc,
      (acc, curr, idx) => acc && equals(curr, other.$value[idx]),
      true,
      this.$value
    );
  }

  map(fn) {
    return new List(this.$value.map(fn));
  }

  join() {
    return this.$value;
  }

  chain(fn) {
    return this.map(fn).join();
  }

  sequence(of) {
    return this.traverse(of, x => x);
  }

  traverse(of, fn) {
    return this.$value.reduce(
      (f, a) =>
        fn(a)
          .map(b => bs => bs.concat(b))
          .ap(f),
      of(new List([]))
    );
  }
}
