const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen('3000')
