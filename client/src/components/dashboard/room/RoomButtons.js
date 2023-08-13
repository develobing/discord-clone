import React from 'react';
import { styled } from '@mui/system';
import ScreenShareButton from './room-buttons/ScreenShareButton';
import MicButton from './room-buttons/MicButton';
import CameraButton from './room-buttons/CameraButton';
import CloseRoomButton from './room-buttons/CloseRoomButton';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/roomActions';

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

const RoomButtons = (props) => {
  const { localStream, isUserJoinedWithOnlyAudio } = props;

  return (
    <MainContainer>
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
    </MainContainer>
  );
};

const mapStateToProps = ({ room }) => ({
  ...room,
});

const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(mapStateToProps, mapActionsToProps)(RoomButtons);
