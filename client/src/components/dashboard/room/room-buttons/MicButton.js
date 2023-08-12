import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

const MicButton = () => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleCamera = () => {
    setMicEnabled(!micEnabled);
  };

  return (
    <IconButton onClick={handleToggleCamera} style={{ color: 'white' }}>
      {micEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
};

export default MicButton;
