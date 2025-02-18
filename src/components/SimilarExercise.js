import React from 'react'
import { Box, Stack, Typography, CircularProgress } from '@mui/material'
import ScrollBar from '../components/ScrollBar'
import Loader from '../components/Loader'

const SimilarExercise = ({ exerciseTarget, exerciseEquipment }) => {
  const targetLoader = () => (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Typography color="black" fontSize="20px" mb="10px">Loading videos for similar target muscles...</Typography>
      <CircularProgress sx={{ mt: '10px' }} />
    </Stack>
  );

  const equipmentLoader = () => (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Typography color="black" fontSize="20px" mb="10px">Loading videos for similar equipment exercises...</Typography>
      <CircularProgress sx={{ mt: '10px' }} />
    </Stack>
  );  

  return (
    <Box sx={{ mt: { lg: '70px', xs: '0px' } }}>
      {/* Target Exercises Section */}
      <Typography sx={{ fontSize: { lg: '40px', xs: '25px' } }} fontWeight={500} color="#000" mb="30px" textAlign='center'>
        Watch more videos for similar <span style={{ color: 'rgb(227, 147, 19)', textTransform: 'uppercase', fontWeight: 'bold' }}> target muscles </span>
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {exerciseTarget.length !== 0 ? <ScrollBar data={exerciseTarget} /> : targetLoader()}
      </Stack>

      {/* Equipment Exercises Section */}
      <Typography sx={{ fontSize: { lg: '40px', xs: '25px' }, mt: { lg: '100px', xs: '60px' } }} fontWeight={500} color="#000" mb="30px" textAlign="center">
        Watch more videos for similar <span style={{ color: 'rgb(227, 147, 19)', textTransform: 'uppercase', fontWeight: 'bold' }}> equipment exercises </span>
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {exerciseEquipment.length !== 0 ? <ScrollBar data={exerciseEquipment} /> : equipmentLoader()}
      </Stack>
    </Box>
  );
}

export default SimilarExercise;
