import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/system';

const MainContainer = styled('div')({
  width: '50%',
  height: '50%',
  borderRadius: '8px',
  backgroundColor: 'black',
});

const VideoEl = styled('video')({
  width: '100%',
  height: '100%',
});

const Video = ({ stream, isLocalStream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <MainContainer>
      <VideoEl
        autoPlay
        ref={videoRef}
        muted={isLocalStream ? true : false}
      ></VideoEl>
    </MainContainer>
  );
};

export default Video;
