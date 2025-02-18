import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction='row'>
            <Button sx={{fontSize:'14px',textTransform:'capitalize',ml:'20px',color:'black',backgroundColor:'#ffbd59'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{fontSize:'14px',textTransform:'capitalize',ml:'20px',color:'black',backgroundColor:'#ffbd59'}}>
                {exercise.bodyPart}
            </Button>
        </Stack>
        <Typography ml="20px" color="black" textTransform="capitalize" fontSize="20px" fontWeight="bold" pb="10px" mt="10px">
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard