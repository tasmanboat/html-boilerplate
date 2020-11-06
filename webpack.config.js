'use strict';

const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    // new CleanWebpackPlugin(),  // will clean dist/*
    // new HtmlWebpackPlugin({    // will overwrite dist/index.html
    //   title: 'Output Management',
    // }),
    new CopyPlugin({
      patterns: [
        { from: 'static', to: 'static' },
      ],
    }),
  ],

  module: {
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },



  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: false, // faster
    port: 8080,
  },



};


