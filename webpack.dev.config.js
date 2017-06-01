const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const defaultConf = require('./webpack.default.config')

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
      defaultConf.module.rules.srcEslint,
      defaultConf.module.rules.srcBabel,
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'public')],
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'stage-1']
        }
      }
    ]
  },
  resolve: defaultConf.resolve,
  devtool: 'source-map',
  context: __dirname,
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
    defaultConf.plugins.provide,
    new CopyWebpackPlugin([
      {from: './public/index.html', to: './'}
    ], {
      ignore: ['**/.DS_Store']
    })
  ]
}

module.exports = webpackConf
