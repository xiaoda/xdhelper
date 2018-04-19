const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const defaultConf = require('./default.config')

let webpackConf = {
  entry: {
    index: './public/index.js'
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      defaultConf.module.rules.eslint,
      defaultConf.module.rules.babel,
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, '../public')],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: defaultConf.resolve,
  devtool: 'source-map',
  context: path.resolve(__dirname, '../'),
  stats: 'errors-only',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9001,
    historyApiFallback: true,
    https: false,
    noInfo: true
  },
  plugins: [
    defaultConf.plugins.define,
    new CopyWebpackPlugin([
      {from: './public/index.html', to: './'}
    ], {
      ignore: ['**/.DS_Store']
    })
  ]
}

module.exports = webpackConf
