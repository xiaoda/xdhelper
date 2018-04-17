const path = require('path')
const webpack = require('webpack')
const defaultConf = require('./default.config')

let webpackConf = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../'),
    publicPath: '/',
    library: 'xd',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      defaultConf.module.rules.eslint,
      defaultConf.module.rules.babel
    ]
  },
  resolve: defaultConf.resolve,
  devtool: 'source-map',
  context: path.resolve(__dirname, '../'),
  stats: 'errors-only',
  plugins: [
    defaultConf.plugins.define
  ]
}

module.exports = webpackConf
