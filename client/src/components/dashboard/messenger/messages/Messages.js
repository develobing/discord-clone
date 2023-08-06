import React, { useRef, useEffect } from 'react';
import { styled } from '@mui/system';
import MessagesHeader from './MessagesHeader';
import { connect } from 'react-redux';
import dummyMessages from './dummyMessages';
import Message from './Message';

const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'calc(100% - 60px)',
  overflow: 'auto',
});

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username} />

      {dummyMessages.map((message) => {
        return (
          <Message
            key={message._id}
            content={message.content}
            username={message.author?.username}
            date={message.date}
            sameAuthor={message.sameAuthor}
            sameDay={message.date}
          ></Message>
        );
      })}
    </MainContainer>
  );
};

const mapStateToProps = ({ chat }) => ({
  ...chat,
});

export default connect(mapStateToProps)(Messages);
