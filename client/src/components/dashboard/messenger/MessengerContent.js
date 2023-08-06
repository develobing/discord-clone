import React, { useEffect } from 'react';
import { styled } from '@mui/material';
import Messages from './messages/Messages.js';
import NewMessageInput from './messages/NewMessageInput.js';

const Wrapper = styled('div')({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    // TODO: Fetch messages
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
