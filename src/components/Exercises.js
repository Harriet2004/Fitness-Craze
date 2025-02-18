import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Typography, Stack } from '@mui/material';
import { getData, exerciseOptions } from '../utils/getData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader'; 

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false); 
  const perPage = 9;
  const indexLast = current * perPage;
  const indexFirst = indexLast - perPage;
  const currentExercise = exercises.slice(indexFirst, indexLast);

  const paginate = (e, value) => {
    setCurrent(value);
    window.scrollTo({ top: 1275, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      setCurrent(1);
      setExercises([]);
      let data = [];
      try {
        if (bodyPart === 'all') {
          data = await getData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          data = await getData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [bodyPart, setExercises]);

  return (
    <Box mt="50px" p="20px" sx={{ mt: { lg: '40px' } }}>
      <Typography variant="h1" mb="40px" sx={{ fontSize: { lg: '40px', xs: '30px' } }} fontWeight="bold" textAlign="center">
        RESULTS
      </Typography>

      {loading ? (
        <Loader />
      ) : (
        <Stack direction="row" justifyContent="center" flexWrap="wrap" sx={{ gap: { lg: '100px', xs: '50px' } }}>
          {currentExercise.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
      )}

      <Stack sx={{ mt: { lg: '30px', xs: '50px' } }} alignItems="center">
        {exercises.length > 9 && !loading && ( 
          <Pagination
            defaultPage={1}
            count={Math.ceil(exercises.length / perPage)}
            size="large"
            page={current}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
