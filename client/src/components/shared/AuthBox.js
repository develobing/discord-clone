import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const BoxWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: '#5865a2',
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 700,
          height: 400,
          padding: '20px',
          bgcolor: '#36393f',
          borderRadius: '5px',
          boxShadow: '0px 2px 10px 0px rgb(0 0 0 / 20%)',
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
