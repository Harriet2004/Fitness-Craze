import React from 'react';
import { useContext } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import Loader from './Loader';
import Rating from '@mui/material/Rating';
import Left from '../assets/left.png'
import Right from '../assets/right.png'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={Left} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={Right} alt="right-arrow" />
    </Typography>
  );
};

const ReviewCard = ({ review }) => (
  <Box bgcolor="#f5f5f5" p={2} m={2} borderRadius="10px" width="300px" sx={{overflow: 'hidden', wordWrap: 'break-word', textOverflow: 'ellipsis'}} >
    <Typography variant="h5" fontWeight="bold" textAlign="center" mb="20px">{review.name}</Typography>
    <Typography variant="h7">"{review.comment}"</Typography>
    <br/> <br/>
    <Rating defaultValue={review.rating} precision={0.5} readOnly />
  </Box>
);

const ReviewCarousel = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return <Loader />;

  return (
    <Box>
      <Typography variant='h1' mb='40px' sx={{ fontSize: {lg:'40px',xs:'30px'}}} fontWeight='bold' textAlign='center' mt = '40px'>
        CUSTOMER REVIEWS
      </Typography>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {reviews.map((review, index) => (
          <Box key={index} itemId={index}>
            <ReviewCard review={review} />
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default ReviewCarousel;
