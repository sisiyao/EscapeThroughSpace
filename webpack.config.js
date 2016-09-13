const path = require('path');
module.exports = {
  context: __dirname,
  entry: "./js/main.js",
  output: {
    path: "./js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js"]
  }
};
