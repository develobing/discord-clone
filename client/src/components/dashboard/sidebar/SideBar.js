import React from 'react';
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';
import ActiveRoomButton from './ActiveRoomButton';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225',
});

const SideBar = ({ activeRooms, isUserInRoom }) => {
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton />

      {activeRooms.map((room) => (
        <ActiveRoomButton
          key={room.roomId}
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          isUserInRoom={isUserInRoom}
        />
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({ room }) => ({ ...room });

export default connect(mapStateToProps)(SideBar);
