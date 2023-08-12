import React from 'react';
import { styled } from '@mui/system';

const MainContainer = styled('div')({
  display: 'flex',
  width: '85%',
  height: '100%',
  flexWrap: 'wrap',
});

const VideosContainer = () => {
  return <MainContainer>Video</MainContainer>;
};

export default VideosContainer;
