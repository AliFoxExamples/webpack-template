const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].bundle.[contenthash].js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[contenthash][ext]',
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist')
        },
      ]
    }),
  ],
}