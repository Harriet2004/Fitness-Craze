import React, { useState, useEffect } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import BodyPart from '../assets/bodypart.png';
import Equipment from '../assets/equipment.png';
import { InfinitySpin } from 'react-loader-spinner';

const ExerciseDetails = ({ exerciseDetail }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (exerciseDetail && exerciseDetail.name) {
      setLoading(false);
    }
  }, [exerciseDetail]);

  const details = [
    {
      pics: BodyPart,
      name: exerciseDetail.bodyPart,
    },
    {
      pics: Equipment,
      name: exerciseDetail.equipment,
    },
  ];

  return (
    <Stack
      sx={{
        flexDirection: { lg: 'row' },
        alignItems: 'center',
        mt: '50px',
        mb: '80px',
        pl: '150px',
        pr: '150px',
      }}
      gap="60px"
    >
      {loading ? (
        <Stack justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
          <InfinitySpin color="black" />
        </Stack>
      ) : (
        <>
          <img
            src={exerciseDetail.gifUrl}
            alt={exerciseDetail.name}
            loading="lazy"
            className="detail-image"
          />
          <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
            <Typography variant="h2" textTransform="uppercase" fontWeight="bold">
              {exerciseDetail.name}
            </Typography>
            <Typography variant="h6" loading="lazy">
              {exerciseDetail.name} is one of the best known exercises to target your {exerciseDetail.target}. Check it out to make your {exerciseDetail.target} stronger.
            </Typography>
            {details.map((item) => (
              <Stack key={item.name} alignItems="center" gap="25px" direction="row" p="0px">
                <Button sx={{ background: '#ffbd59', borderRadius: '50px', width: '100px', height: '100px' }}>
                  <img
                    src={item.pics}
                    alt={item.name}
                    style={{ width: '40px', height: '50px' }}
                  />
                </Button>
                <Typography textTransform="capitalize" variant="h6">
                  {item.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default ExerciseDetails;
