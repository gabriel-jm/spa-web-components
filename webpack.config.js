const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    publicPath: '/public/',
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000
  },
  output: {
    publicPath: '/public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}
