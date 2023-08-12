import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';

const ScreenShareButton = () => {
  const [isScreenShareingActive, setIsScreenShareingActive] = useState(true);

  const handleScreenShareToggle = () => {
    setIsScreenShareingActive(!isScreenShareingActive);
  };

  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: 'white' }}>
      {isScreenShareingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
