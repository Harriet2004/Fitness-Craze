import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ScrollBar from '../components/ScrollBar'
import Loader from '../components/Loader'

const SimilarExercise = ({exerciseTarget, exerciseEquipment}) => {
  return (
    <Box sx={{ mt: { lg: '70px', xs: '0px' } }}>
        <Typography sx={{ fontSize: { lg: '40px', xs: '25px' } }} fontWeight={500} color="#000" mb="30px" textAlign='center'>
          Watch more videos for similar <span style = {{color:'rgb(227, 147, 19)', textTransform:'uppercase', fontWeight:'bold'}}> target muscles </span>
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
          {exerciseTarget.length !== 0 ? <ScrollBar data={exerciseTarget} /> : <Loader />}
        </Stack>
        <Typography sx={{ fontSize: { lg: '40px', xs: '25px' }, mt: { lg: '100px', xs: '60px' } }} fontWeight={500} color="#000" mb="30px" textAlign="center">
          Watch more videos for similar <span style = {{color:'rgb(227, 147, 19)', textTransform:'uppercase', fontWeight:'bold'}}> equipment exercises </span>
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
          {exerciseEquipment.length !== 0 ? <ScrollBar data={exerciseEquipment} /> : <Loader />}
        </Stack>
    </Box>
  )
}

export default SimilarExercise