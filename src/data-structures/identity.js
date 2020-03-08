import identity from "../function/identity";

export default class Identity {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Identity(x);
  }

  equals(other) {
    return this.$value === other.$value;
  }

  map(fn) {
    return Identity.of(fn(this.$value));
  }

  ap(f) {
    return f.map(this.$value);
  }

  chain(fn) {
    return this.map(fn).join();
  }

  join() {
    return this.$value;
  }

  sequence(of) {
    return this.traverse(of, identity);
  }

  traverse(of, fn) {
    return fn(this.$value).map(Identity.of);
  }
}
