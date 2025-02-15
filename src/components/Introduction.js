import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

const Introduction = () => {
  return (
    <Box 
    display='flex'
    flexDirection='column'
    sx = {{pt: { lg: '50px', xs: '20px'}, paddingX: "20px"}}
    justifyContent= "center" 
    alignItems= "center" 
    minHeight= "80px" 
    width= "100vw" 
    textAlign='center'
    >
        <Typography color='#ffbd59' fontSize='40px' fontWeight='800'>
            Fitness club
        </Typography>
        <Typography fontWeight='900' sx= {{fontSize: {lg: '30px', xs: '25px'}}}>
            Looking to strengthen, tone, or build muscle? 
        </Typography>
        <Typography fontWeight='600' mt={2} sx ={{maxWidth:'1000px', paddingX: "20px"}}>
            GymApp is your go-to resource for exercises targeting every muscle group. Whether you're a beginner or an experienced athlete, explore a vast collection of expert-backed workouts designed to help you achieve your fitness goals. From strength training and bodyweight exercises to flexibility routines and endurance workouts, we provide step-by-step instructions, benefits, and tips for each movement. Start exploring and take your fitness to the next level!
        </Typography>
        <Typography fontSize='22px' lineHeight='85px'>
            Check out the most effective exercises!
        </Typography>
        <Button variant='contained' sx={{backgroundColor: 'ochre.main', color: 'ochre.contrastText', '&:hover': { backgroundColor: 'ochre.dark' }}}>
            Explore Exercises
        </Button>
    </Box>
  )
}

export default Introduction