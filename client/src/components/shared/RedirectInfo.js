import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const RedirectText = styled('span')({
  fontWeight: 500,
  color: '#00aff4',
  cursor: 'pointer',
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{
        display: 'flex',
        gap: '5px',
        color: '#72767d',
      }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
