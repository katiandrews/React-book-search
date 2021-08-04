const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new ESLintPlugin({ extensions: ['tsx', 'ts', 'js'] }),
  ]
}