import curry from "../function/curry";

export default curry((search, replacement, string) =>
  string.replace(search, replacement)
);
