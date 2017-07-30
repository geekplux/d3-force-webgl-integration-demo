const path = require('path')
const webpack = require('webpack')
const SRC = path.join(__dirname, 'src')
const EXAMPLE = path.join(__dirname, 'example')

module.exports = {
  entry: {
    js: [
      path.join(SRC, 'index.js'),
      path.join(EXAMPLE, 'index.js')
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: 'file-loader?name=[name].[ext]'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        'babel-loader',
        'eslint-loader'
      ]
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  resolve: {
    extensions: ['.js', 'json']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}
