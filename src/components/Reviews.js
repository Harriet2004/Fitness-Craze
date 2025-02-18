import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import Loader from './Loader';
import Rating from '@mui/material/Rating';
import Left from '../assets/left.png';
import Right from '../assets/right.png';

// Left arrow button
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      className="left-arrow"
      sx={{
        position: 'absolute',
        left: '10px',
        zIndex: 1,
      }}
    >
      <img src={Left} alt="left-arrow" />
    </Typography>
  );
};

// Right arrow button
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      className="right-arrow"
      sx={{
        position: 'absolute',
        right: '10px',
        zIndex: 1,
      }}
    >
      <img src={Right} alt="right-arrow" />
    </Typography>
  );
};

const ReviewCard = ({ review }) => (
  <Box bgcolor="#f5f5f5" p={2} m={2} borderRadius="10px" width="300px" sx={{ overflow: 'hidden', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
    <Typography variant="h5" fontWeight="bold" textAlign="center" mb="20px">{review.name}</Typography>
    <Typography variant="h7">"{review.comment}"</Typography>
    <br /> <br />
    <Rating defaultValue={review.rating} precision={0.5} readOnly />
  </Box>
);

const ReviewCarousel = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return <Loader />;

  return (
    <Box id = "reviews" sx={{ position: 'relative', pb: '20px', m: '0 43px' }}> 
      <Typography variant='h1' mb='40px' sx={{ fontSize: { lg: '40px', xs: '30px' } }} fontWeight='bold' textAlign='center' mt='40px'>
        CUSTOMER REVIEWS
      </Typography>
      <ScrollMenu LeftArrow={<LeftArrow/>} RightArrow={<RightArrow/>}>
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

