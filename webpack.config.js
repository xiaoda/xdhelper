const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let webpackConfig = {
  entry: {
    index: './src/index.js',
    demo: './src/demo.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'eslint-loader',
        options: {
          failOnWarning: true,
          failOnError: true,
        }
      },
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'stage-1', 'flow']
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.css']
  },
  devtool: 'source-map',
  context: __dirname,
  stats: 'errors-only',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9001,
    historyApiFallback: {
      index: '/demo.html',
    },
    https: false,
    noInfo: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ProvidePlugin({
      config: 'general/config',
    }),
    new CopyWebpackPlugin([
      {from: './src/demo.html', to: './'}
    ], {
      ignore: ['**/.DS_Store']
    })
  ]
}

let modulesFiles = glob.sync('./src/modules/**/*.js')
modulesFiles.forEach((item, key) => {
  let [name] = item.match(/modules\/\S+$/)
  name = name.replace(/\.js$/, '')
  webpackConfig['entry'][name] = item
})

module.exports = webpackConfig
