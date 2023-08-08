import React, { useEffect } from 'react';
import { styled } from '@mui/material';
import Messages from './messages/Messages.js';
import NewMessageInput from './messages/NewMessageInput.js';
import { getDirectChatHistory } from '../../../sockets/socketConnection.js';

const Wrapper = styled('div')({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails._id,
    });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
