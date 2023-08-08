import React from 'react';
import { styled } from '@mui/system';

const Separator = styled('div')({
  position: 'relative',
  width: '95%',
  height: '1px',
  marginTop: '20px',
  marginBottom: '10px',
  backgroundColor: '#b9bbbe',
});

const DateLabel = styled('span')({
  backgroundColor: '#36383f',
  position: 'absolute',
  top: '-10px',
  left: '45%',
  padding: '0 5px',
  color: '#b9bbbe',
  fontSize: '14px',
});

const DateSeparator = ({ date }) => {
  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  );
};

export default DateSeparator;
