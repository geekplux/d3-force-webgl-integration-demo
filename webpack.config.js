const path = require('path')
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
    path: EXAMPLE,
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
  devtool: 'evil-source-map',
  devServer: {
    contentBase: EXAMPLE,
    inline: true,
    stats: { color: true },
    port: 3000
  }
}
