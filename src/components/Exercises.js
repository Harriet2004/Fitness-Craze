import React from 'react'
import { useEffect, useState } from 'react'
import { Pagination } from '@mui/material/Pagination'
import {Box, Typography, Stack} from '@mui/material'
import { getData, exerciseOptions } from '../utils/getData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart}) => {
  return (
      <Box id="exercises" 
      mt = '50px'
      p = '20px'
      sx = {{mt: {lg: '110px'}}}
      >
        <Typography variant='h2' mb='40px'>
          Showing results.
        </Typography>
        <Stack direction='row' justifyContent='center' flexWrap='wrap' sx = {{gap: {lg: '110px', xs: '50px'}}}>
          {exercises.map((exercise,index) => (
            <ExerciseCard key={index} exercise = {exercise}/>
          ))}
        </Stack>
      </Box>
    )
  }

export default Exercises