import React from 'react';
import { styled } from '@mui/material';
import Avatar from '../../../shared/Avatar.js';
import { Typography } from '@mui/material';

const MainContainer = styled('div')({
  display: 'column',
  width: '98%',
  marginTop: '10px',
});

const MessagesHeader = ({ username }) => {
  return (
    <MainContainer>
      <Avatar large username={username} />

      <Typography
        variant="h4"
        sx={{
          marginTop: '10px',
          marginLeft: '10px',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {username}
      </Typography>

      <Typography
        sx={{
          marginLeft: '5px',
          marginRight: '5px',
          color: '#b9bbbe',
        }}
      >
        {username} is typing...
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
