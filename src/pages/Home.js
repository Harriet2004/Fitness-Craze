import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import Introduction from '../components/Introduction';
import Search from '../components/Search';
import Reviews from '../components/Reviews';
import Navbar from '../components/Navbar'; 
import Bg from '../assets/new-bg.png';
import ReviewCarousel from '../components/Reviews';
import { useEffect } from 'react';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    const reviews = [
      {
        name: "John Doe",
        comment: "This platform is amazing! The exercise recommendations are spot on, and I love how easy it is to navigate. Highly recommended!",
        rating: 5
      },
      {
        name: "Jane Smith",
        comment: "I've been using this for a few weeks now, and it's been incredibly helpful. The workout suggestions really target the right muscles.",
        rating: 4.5
      },
      {
        name: "Michael Johnson",
        comment: "Great resource for fitness enthusiasts! The videos are helpful, and the explanations are clear. Could use more advanced workout plans though.",
        rating: 4
      },
      {
        name: "Emily White",
        comment: "Simple, effective, and motivating. This has helped me stay consistent with my workouts. Love the variety of exercises available!",
        rating: 5
      },
      {
        name: "Chris Brown",
        comment: "Overall, a good platform with useful exercises. However, I wish there were more beginner-friendly routines with step-by-step guidance.",
        rating: 3.5
      }
    ];
    
    setReviews(reviews);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          minHeight: "90vh", 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Bg})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Navbar />
        <Introduction />
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
        <ReviewCarousel reviews={reviews} />
      </Box>
    </Box>
  );
};

export default Home;
