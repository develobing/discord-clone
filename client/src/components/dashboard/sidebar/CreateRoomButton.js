import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import * as roomHandler from '../../../webRTC/roomHandler';

const CreateRoomButton = () => {
  const createNewRoomHandler = () => {
    // Creating a room and shending info to the server
    roomHandler.createNewRoom();
  };

  return (
    <Button
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: '10px',
        color: 'white',
        backgroundColor: '#5865f2',
      }}
      onClick={createNewRoomHandler}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;
