import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  height: '100%',
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography variant="h6" sx={{ color: 'white' }}>
        Welcome to the chat app!
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;
