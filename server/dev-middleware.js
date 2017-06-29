const webpack = require('webpack')
const config = require('../config/webpack.dev.config.js')

const compiler = webpack(config)
const { output: { publicPath } } = config

const devMiddlewareConfig = { noInfo: true, publicPath }

const initialize = app => {
  app.use(require('webpack-hot-middleware')(compiler))
  app.use(require('webpack-dev-middleware')(compiler, devMiddlewareConfig))
}

module.exports = { initialize }
