import React from 'react'
import Icon from '../assets/gym.png'
import { Stack, Typography } from '@mui/material'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
   <Stack
   className='bodyPart-card'
   type = "button"
   alignItems="center"
   justifyContent="center"
   onClick={() => {
    setBodyPart(item);
    window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
    }}
   sx = {
    bodyPart === item ? {
    cursor: 'pointer',
    gap: '50px',
    width: '250px',
    height: '250px',
    borderBottomLeftRadius: '20px',
    borderTop: '5px solid #ffbd59'
    } : {
    cursor: 'pointer',
    gap: '50px',
    width: '250px',
    height: '250px',
    borderBottomLeftRadius: '20px'  
    }}
   >
    <img src = {Icon} alt = "Dumbell" style={{width: '40px', height: '40px'}} />
    <Typography fontWeight='bold' fontSize='20px' textTransform='uppercase'>{item}</Typography>
   </Stack>
  )
}

export default BodyPart