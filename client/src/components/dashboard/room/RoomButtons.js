import React from 'react';
import { styled } from '@mui/system';
import ScreenShareButton from './room-buttons/ScreenShareButton';
import MicButton from './room-buttons/MicButton';
import CameraButton from './room-buttons/CameraButton';
import CloseRoomButton from './room-buttons/CloseRoomButton';

const MainContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '15%',
  backgroundColor: '#5865f2',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
});

const RoomButtons = () => {
  return (
    <MainContainer>
      <ScreenShareButton />
      <MicButton />
      <CloseRoomButton />
      <CameraButton />
    </MainContainer>
  );
};

export default RoomButtons;
