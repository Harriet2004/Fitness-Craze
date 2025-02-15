import React, { useState } from 'react'
import { Box } from '@mui/material'

import Exercises from '../components/Exercises'
import Introduction from '../components/Introduction'
import Search from '../components/Search'
import Reviews from '../components/Reviews'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Introduction />
      <Search setExercises = {setExercises} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
      <Exercises setExercises = {setExercises} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
      <Reviews />
    </Box>
  )
}

export default Home