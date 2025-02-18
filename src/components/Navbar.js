import React from 'react';
import Logo from '../assets/NEW.png';

import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack 
    direction="column"
    sx = {{mt: {sm: '32px', xs: '20px'}}}
    justifyContent="center"
    alignItems="center"
    width='100%'
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
          <a href="#exercises" style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid #ffbd59'}}> Exercises </a>
          <a href="#reviews" style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid #ffbd59'}}> Reviews </a>

        </Stack>
    </Stack>
  )
}

export default Navbar