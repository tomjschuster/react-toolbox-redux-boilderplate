import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import PropTypes from 'prop-types'

const MainAppBar = (props, { history }) => (
  <AppBar
    title='React Toolbox Redux Boilerplate'
    leftIcon='star'
    onLeftIconClick={() => history.push('/')}
    flat
    {...props}
  />
)

MainAppBar.contextTypes = { history: PropTypes.object }

export default MainAppBar

