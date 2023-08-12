import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import React from 'react';
import * as roomHandler from '../../../../webRTC/roomHandler';

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {
    roomHandler.leaveRoom();
  };

  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: 'white' }}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
