import React, { useEffect, useState} from 'react'
import { Box, TextField, Stack, Typography, Button } from '@mui/material'
import { exerciseOptions, getData } from '../utils/getData';
import ScrollBar from './ScrollBar';

const Search = ({setExercises, setBodyPart, bodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  
  useEffect(() => {
    const getExerciseData = async () => {
      const bodyPartsData = await getData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      console.log('Body Parts Data:', bodyPartsData);
      setBodyParts(['all', ...bodyPartsData]);
    }
    getExerciseData();
  }, [])

  const searchQuery = async () => {
  if (search) {
    // Construct URL based on search term
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${search}?offset=0&limit=1000`;

    const data = await getData(url, exerciseOptions);

    if (Array.isArray(data)) {
      const searchExercise = data.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1275, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(searchExercise); 
    } else {
      console.error("Expected an array, but got:", data);
    }
  }
};


  return (
    <Stack id="exercises" justifyContent='center' alignItems='center' mt='10px' p='20px'>
      <Typography fontWeight='700' textAlign='center' sx={{fontSize: {lg: '40px', xs: '30px'}}} mb='10px'>
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
      <Box sx={{position: 'relative', width: '100%', p: '25px'}}>
        <ScrollBar data = {bodyParts} isBodyPart bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default Search