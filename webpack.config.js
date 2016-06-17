var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var apps = ['opacity', 'scale', 'rotate', 'translate', 'skew'];

var outDir = path.resolve(__dirname, 'build');

var entries = {};
var copyRules = [];

for (var app of apps) {
  entries[`./build/${app}/bundle`] = `./${app}/main.js`;
  copyRules.push({
    from: path.resolve(__dirname, app, 'index.html'),
    to: path.resolve(__dirname, 'build', app, 'index.html')
  });
  copyRules.push({
    from: path.resolve(__dirname, app, 'assets'),
    to: path.resolve(__dirname, 'build', app, 'assets')
  });
}

module.exports = {
  entry: entries,
  output: {
    path: './',
    filename: '[name].js'
  },
  plugins: [
    new CopyWebpackPlugin(copyRules),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader'
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
