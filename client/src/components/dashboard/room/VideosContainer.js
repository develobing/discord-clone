import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@mui/system';
import Video from './Video';

const MainContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexWrap: 'wrap',
});

const VideosContainer = ({
  localStream,
  remoteStreams,
  screenSharingStream,
}) => {
  return (
    <MainContainer>
      <Video
        isLocalStream
        stream={screenSharingStream ? screenSharingStream : localStream}
      ></Video>

      {remoteStreams.map((stream) => (
        <Video key={stream.id} stream={stream}></Video>
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({ room }) => ({
  ...room,
});

export default connect(mapStateToProps)(VideosContainer);
