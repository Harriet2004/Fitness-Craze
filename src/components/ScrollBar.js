import React from 'react'
import { ScrollMenu, VisibilityContext }  from 'react-horizontal-scrolling-menu'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { useContext } from 'react'
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

const ScrollBar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box key={item.id || item} itemId={item.id || item} title = {item.id||item} m = "0 100px">
          <BodyPart item = {item} bodyPart = {bodyPart} setBodyPart = {setBodyPart} />
        </Box>
      )
      )}
    </ScrollMenu>
  )
}

export default ScrollBar