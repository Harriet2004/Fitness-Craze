import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import Introduction from '../components/Introduction';
import Search from '../components/Search';
import Reviews from '../components/Reviews';
import Navbar from '../components/Navbar'; 
import Bg from '../assets/new-bg.png';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

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
        <Reviews />
      </Box>
    </Box>
  );
};

export default Home;
