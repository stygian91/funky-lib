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

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};
