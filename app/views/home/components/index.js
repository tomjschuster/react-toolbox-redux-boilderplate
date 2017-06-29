import React from 'react'

import MainLayout from 'ui-library/MainLayout'
import { Link } from 'routing'

const Home = () => (
  <MainLayout>
    <Link to='/demo'>Demo</Link>
  </MainLayout>
)

export default Home
