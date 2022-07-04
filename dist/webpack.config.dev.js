"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, 'css-loader']
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './dist/index.html'
  }), new MiniCssExtractPlugin({
    filename: 'style/[name].css'
  })],
  devServer: {
    port: 3006
  }
};