import React from 'react';
import { styled } from '@mui/system';
import DropdownMenu from './DropdownMenu';
import ChoosenOptionLabel from './ChoosenOptionLabel';

const MainContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  right: 0,
  width: 'calc(100% - 326px)',
  height: '48px',
  padding: '0 15px',
  borderBottom: '1px solid black',
  backgroundColor: '#36393f',
});

const AppBar = () => {
  return (
    <MainContainer>
      <ChoosenOptionLabel />
      <DropdownMenu />
    </MainContainer>
  );
};

export default AppBar;
