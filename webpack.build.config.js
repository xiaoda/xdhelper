const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const defaultConf = require('./webpack.default.config')

let webpackConf = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      defaultConf.module.rules.srcEslint,
      defaultConf.module.rules.srcBabel
    ]
  },
  resolve: defaultConf.resolve,
  devtool: 'source-map',
  context: __dirname,
  stats: 'errors-only',
  plugins: [
    defaultConf.plugins.define,
    defaultConf.plugins.provide
  ]
}

let modulesFiles = glob.sync('./src/modules/**/*.js')
modulesFiles.forEach((item, key) => {
  let [name] = item.match(/modules\/\S+$/)
  name = name.replace(/\.js$/, '')
  if (name !== 'modules/index') {
    webpackConf['entry'][name] = item
  }
})

module.exports = webpackConf
