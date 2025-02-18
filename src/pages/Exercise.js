import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import ExerciseDetails from '../components/ExerciseDetails'
import Videos from '../components/Videos'
import SimilarExercise from '../components/SimilarExercise'

import { getData, exerciseOptions } from '../utils/getData'

const Exercise = () => {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const getExerciseData = async (params) => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const data = await getData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(data);
    }
    getExerciseData();
  }, [id])
  return (
    <Box>
      <ExerciseDetails exerciseDetail = {exerciseDetail} />
      <Videos/>
      <SimilarExercise/>
    </Box>
  )
}

export default Exercise