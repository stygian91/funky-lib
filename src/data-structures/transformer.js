import identity from "../function/identity";

class Transformer {
  constructor(step, init = null, result = null) {
    this.step = step;
    this.init = !!init ? init : () => [];
    this.result = !!result ? result : identity;
  }
}

export default Transformer;

export const isTransformer = (x) => x instanceof Transformer;
