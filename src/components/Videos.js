import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Videos = ({exerciseVideo, name}) => {
  if(!exerciseVideo.length) return 'Loading...';
  return (
    <Box p="20px">
        <Typography sx={{ fontSize: { lg: '40px', xs: '25px' } }} fontWeight={500} color="#000" mb="30px" textAlign='center'>
            Watch videos for <span style = {{color:'rgb(227, 147, 19)', textTransform:'uppercase', fontWeight:'bold'}}> {name} </span>
        </Typography>
        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: '0px' } }} justifyContent="center" flexWrap="wrap" alignItems="center">
            {exerciseVideo?.slice(0, 3)?.map((item, index) => (
                <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
                <Typography sx={{ fontSize: { lg: '22px', xs: '15px' } }} fontWeight={600} color="#000"> 
                    {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                    {item.video.channelName}
                </Typography>
            </Box>
            </a>
            ))}
        </Stack>
        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: '0px' } }} justifyContent="center" flexWrap="wrap" alignItems="center">
            {exerciseVideo?.slice(3, 6)?.map((item, index) => (
                <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
                <Typography sx={{ fontSize: { lg: '22px', xs: '15px' } }} fontWeight={600} color="#000"> 
                    {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                    {item.video.channelName}
                </Typography>
            </Box>
            </a>
            ))}
        </Stack>
    </Box>
  )
}

export default Videos