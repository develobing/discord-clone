import React, { useState } from 'react';
import { styled } from '@mui/system';
import ResizeRoomButton from './ResizeRoomButton';
import VideosContainer from './VideosContainer';
import RoomButtons from './RoomButtons';

const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  borderRadius: '8px',
  backgroundColor: '#202225',
});

const fullScreenRoomStyle = {
  width: '100%',
  height: '100vh',
};

const minimizedRoomStyle = {
  width: '40%',
  height: '40vh',
  right: '0px',
  bottom: '0px',
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };

  return (
    <MainContainer
      style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}
    >
      <VideosContainer />
      <RoomButtons />
      <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={roomResizeHandler}
      ></ResizeRoomButton>
    </MainContainer>
  );
};

export default Room;
