const path = require('path')
const webpack = require('webpack')

let defaultConfig = {
  module: {
    rules: {
      srcEslint: {
        enforce: 'pre',
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'eslint-loader',
        options: {
          failOnWarning: true,
          failOnError: true
        }
      },
      srcBabel: {
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'stage-1', 'flow']
        }
      }
    }
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json']
  },
  plugins: {
    define: new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    provide: new webpack.ProvidePlugin({
      config: 'general/config'
    })
  }
}

module.exports = defaultConfig
