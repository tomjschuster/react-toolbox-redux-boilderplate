import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from 'state'
import { history, routes, Router } from 'routing'
import 'theme/global.css'

const appDiv = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  appDiv
)

