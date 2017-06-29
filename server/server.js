'use strict'
const path = require('path')
const express = require('express')

const publicFolder  = process.env.NODE_ENV === 'production' ?
  'public' : 'public-dev'

const PATHS = {
  public: path.resolve(__dirname, '..', publicFolder),
  get index () { return path.resolve(this.public, 'index.html') }
}

module.exports = {
  app: () => {
    const app = express()

    app.use(express.static(PATHS.public))

    if (process.env.NODE_ENV !== 'production') {
      require('./dev-middleware').initialize(app)
    }

    app.get('*', (_, res) => res.sendFile(PATHS.index))

    return app
  }
}
