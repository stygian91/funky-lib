/**
 * Either monad, parent of `Left` and `Right`.
 * Used for `Right` instance creation.
 */
class Either {
  constructor(x) {
    this.value = x;
  }

  static of(x) {
    return new Right(x);
  }
}

/**
 * Left value of the Either monad.
 * Has noop implementations.
 */
class Left extends Either {
  get isLeft() {
    return true;
  }

  get isRight() {
    return false;
  }

  static of(x) {
    throw new Error(
      "`of` called on class Left (value) instead of Either (type)"
    );
  }

  equals(other) {
    return other instanceof Left && this.value === other.value;
  }

  map() {
    return this;
  }

  ap() {
    return this;
  }

  chain() {
    return this;
  }

  join() {
    return this;
  }

  sequence(of) {
    return of(this);
  }

  traverse(of, fn) {
    return of(this);
  }
}

/**
 * Right value of the Either monad.
 */
class Right extends Either {
  get isLeft() {
    return false;
  }

  get isRight() {
    return true;
  }

  static of(x) {
    throw new Error(
      "`of` called on class Right (value) instead of Either (type)"
    );
  }

  equals(other) {
    return other instanceof Right && this.value === other.value;
  }

  map(fn) {
    return Either.of(fn(this.value));
  }

  ap(f) {
    return f.map(this.value);
  }

  chain(fn) {
    return this.map(fn).join();
  }

  join() {
    return this.value;
  }

  sequence(of) {
    return this.traverse(of, (x) => x);
  }

  traverse(of, fn) {
    return fn(this.value).map(Either.of);
  }
}

export { Left, Right, Either };
