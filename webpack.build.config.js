const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const defaultConfig = require('./webpack.default.config')

let webpackConfig = {
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
      defaultConfig.module.rules.srcEslint,
      defaultConfig.module.rules.srcBabel
    ]
  },
  resolve: defaultConfig.resolve,
  devtool: 'source-map',
  context: __dirname,
  stats: 'errors-only',
  plugins: [
    defaultConfig.plugins.define,
    defaultConfig.plugins.provide
  ]
}

let modulesFiles = glob.sync('./src/modules/**/*.js')
modulesFiles.forEach((item, key) => {
  let [name] = item.match(/modules\/\S+$/)
  name = name.replace(/\.js$/, '')
  if (name !== 'modules/index') {
    webpackConfig['entry'][name] = item
  }
})

module.exports = webpackConfig
