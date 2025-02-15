import React, { useEffect, useState} from 'react'
import { Box, TextField, Stack, Typography, Button } from '@mui/material'

const Search = () => {
  const [search, setSearch] = useState[''];

  const searchQuery = async () => {
    if(search) {
      const data = await getData();
    }
  }

  return (
    <Stack justifyContent='center' alignItems='center' mt='40px' p='20px'>
      <Typography fontWeight='700' textAlign='center' sx={{fontSize: {lg: '40px', xs: '30px'}}} mb='50px'>
        Check out some cool exercises!
      </Typography>
      <Box mb='70px' position = 'relative'>
        <TextField
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search for exercises'
          value={search}
          height='70px'
          sx = {{
            width: {lg: '800px', xs: '400px'},
            backgroundColor: 'white',
            input: {border: 'none', fontWeight: '700'},
            borderRadius: '40px'
          }}
        />
        <Button className='search-btn'
          sx = {{
            position: 'absolute',
            bgcolor: '#ffbd59',
            color: 'black',
            textTransform: 'none',
            height: '56px',
            width: {lg:'100px',xs:'80px'},
            fontSize: {lg:'15px',xs:'10px'},
            right: '0'
          }}    
          onClick={searchQuery}    
        >SEARCH</Button>
      </Box>
    </Stack>
  )
}

export default Search