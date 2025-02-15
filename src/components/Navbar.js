import React from 'react';
import Logo from '../assets/muscle.png';

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
        <img src={Logo} alt = 'Logo' style ={{marginBottom: '10px', width: '175px', height: '60px'}} />
      </Link>
        <Stack
        direction="row"
        fontSize="24px"
        gap="40px"
        alignItems="flex-end"
        >
          <Link to ='/' style = {{color: 'black', textDecoration: 'none', borderBottom: '3px solid black'}}>
            Home
          </Link>
          <a href="#exercises" style={{textDecoration: 'none', color: 'black', borderBottom: '3px solid black'}}> Exercises </a>
          <a href="#reviews" style={{textDecoration: 'none', color: 'black', borderBottom: '3px solid black'}}> Reviews </a>

        </Stack>
    </Stack>
  )
}

export default Navbar