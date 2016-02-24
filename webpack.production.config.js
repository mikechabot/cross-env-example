var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        inject: 'body'
      })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};