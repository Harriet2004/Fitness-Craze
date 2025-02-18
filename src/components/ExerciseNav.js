import React from 'react';
import Logo from '../assets/NEW.png';

import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const ExerciseNav = () => {
  return (
    <Stack 
    direction="column"
    justifyContent="center"
    alignItems="center"
    width='100%'
    bgcolor="black"
    pt="30px"
    pb="40px"
    >
      <Link to='/'>
        <img src={Logo} alt = 'Logo' style ={{marginBottom: '10px', width: '220px', height: '60px'}} />
      </Link>
        <Stack
        direction="row"
        fontSize="24px"
        gap="40px"
        alignItems="flex-end"
        >
          <Link to ='/' style = {{color: 'white', textDecoration: 'none', borderBottom: '3px solid #ffbd59'}}>
            Home
          </Link>
        </Stack>
    </Stack>
  )
}

export default ExerciseNav