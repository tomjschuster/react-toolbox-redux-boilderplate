import React from 'react'

import MainLayout from 'ui-library/MainLayout'

const messages = {
  default: 'Something went wrong...',
  404: 'Sorry, we couldn\'t find that page'
}

const ErrorView = ({ error: { status } }) => (
  <MainLayout>
    { messages[status] || messages.default }
  </MainLayout>
)

export default ErrorView

