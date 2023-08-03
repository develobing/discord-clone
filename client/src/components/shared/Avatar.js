import React from 'react';
import { styled } from '@mui/system';

const AvatarPreview = styled('div')({
  width: '42px',
  height: '42px',
  borderRadius: '42px',
  backgroundColor: '#7289da',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: '700',
  marginLeft: '5px',
  color: 'white',
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview style={large ? { height: '80px', width: '80px' } : {}}>
      {username?.substring(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;
