import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import ExerciseDetails from '../components/ExerciseDetails'
import Videos from '../components/Videos'
import SimilarExercise from '../components/SimilarExercise'

import { getData, exerciseOptions, youtubeOptions } from '../utils/getData'

const Exercise = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const getExerciseData = async (params) => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const detailData = await getData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(detailData);

      const youtubeData = await getData(`${youtubeUrl}/search?query=${detailData.name}`,youtubeOptions);
      setExerciseVideo(youtubeData.contents);
    }
    getExerciseData();
  }, [id])
  return (
    <Box>
      <ExerciseDetails exerciseDetail = {exerciseDetail} />
      <Videos exerciseVideo = {exerciseVideo} name = {exerciseDetail.name}/>
      <SimilarExercise/>
    </Box>
  )
}

export default Exercise