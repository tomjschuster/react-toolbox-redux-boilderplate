import React from 'react'
import { Demo, ErrorView, Home } from 'views'
import { actions } from 'state'

export default [
  {
    path: '/demo',
    action: () => {
      actions.demo.incrementCounter()
      return  <Demo />
    }
  },
  {
    path: '/error',
    action: ({ error }) => <ErrorView error={error} />
  },
  {
    path: '/',
    action: () => <Home />
  }
]
