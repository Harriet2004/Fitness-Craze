import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';

import Exercise from './pages/Exercise';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <Box width="400px" sx = {{width: {xl : '1488px'}}} m = 'auto'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element = {<Exercise />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App