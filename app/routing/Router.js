import React, { Component } from 'react'
import PropTypes from 'prop-types'
import toRegex from 'path-to-regexp'

export default class Router extends Component {
  state = { view: null }

  static childContextTypes = { history: PropTypes.object }

  getChildContext() {
    return { history: this.props.history }
  }
  
  componentDidMount() {
    const { history } = this.props

    history.listen(this.renderView)
    this.renderView(history.location)
  }

  // Returns object of url parameters if matched, null otherwise
  static matchURI = (path, uri) => {
    const keys = []
    const pattern = toRegex(path, keys)
    const match = pattern.exec(uri)
    return match === null ? null :
      match.slice(1).reduce((params, param, idx) => ({
        ...params, [keys[idx].name]: param
      }), {})
  }

  resolve = (location) => {
    const route = this.props.routes.reduce((match, route) => {
      const uri = location.error ? '/error' : location.pathname
      const params = Router.matchURI(route.path, uri)
      return !match && params ?
        new Promise((resolve, reject) => {
            try {
              resolve(route.action({ ...location, params }))
            } catch (e) {
              reject(e)
            }
        }) :
        match
    }, null)
    if (route) {
      return route
    }
    const error = Object.assign(new Error('Not found'), { status: 404 })
    return Promise.reject(error)
  }

  setView = view => this.setState({ view })

  renderView = location => {
    this.resolve(location).then(this.setView)
      .catch(error => {
        if (process.env.NODE_ENV === 'development') console.error(error)
        this.resolve({ ...location, error }).then(this.setView)
      })
  }  


  render() {
    return (
      <div className='router'>
        { this.state.view }
      </div>
    )
  }
}
