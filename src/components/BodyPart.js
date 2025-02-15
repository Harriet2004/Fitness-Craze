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
    <img src = {Icon} alt = "Dumbell" />
   </Stack>
  )
}

export default BodyPart