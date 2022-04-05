const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    library: {
      type: 'umd',
      name: 'funkyLib'
    },
    path: path.join(__dirname, 'umd'),
  },
};
