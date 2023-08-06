import React, { useState } from 'react';
import { styled } from '@mui/system';
import Avatar from '../../../shared/Avatar.js';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '60px',
});

const Input = styled('input')({
  width: '100%',
  height: '44px',
  margin: '0 5px',
  padding: '0 15px',
  border: 'none',
  borderRadius: '8px',
  outline: 'none',
  backgroundColor: '#2f3136',
  color: 'white',
  fontSize: '16px',
});

const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState('');

  const handleMessageValueChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    console.log('handleSendMessage() - message', message);
    setMessage('');
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Send message to ${chosenChatDetails?.username}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyDown}
      />
    </MainContainer>
  );
};

const mapStateToProps = ({ chat }) => ({
  ...chat,
});

export default connect(mapStateToProps)(NewMessageInput);
