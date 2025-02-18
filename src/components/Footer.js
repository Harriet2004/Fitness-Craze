import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/NEW.png'

const Footer = () => (
  <Box mt="80px" bgcolor="black">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '220px', height: '60px'}} />
    </Stack>
    <Typography color="white" variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Get Crazy With Fitness!</Typography>
  </Box>
);

export default Footer