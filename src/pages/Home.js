import React from 'react'
import { Box } from '@mui/material'

import Exercises from '../components/Exercises'
import Introduction from '../components/Introduction'
import Search from '../components/Search'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <Box>
      <Introduction />
      <Search />
      <Exercises />
      <Reviews />
    </Box>
  )
}

export default Home