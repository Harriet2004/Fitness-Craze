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
      setBodyParts(['all', ...bodyPartsData]);
    }
    getExerciseData();
  }, [])

  const searchQuery = async () => {
    if(search) {
      const data = await getData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchExercise = data.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises([searchExercise]);
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
      <Box sx={{position: 'relative', width: '100%', p: '15px'}}>
        <ScrollBar data = {bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default Search