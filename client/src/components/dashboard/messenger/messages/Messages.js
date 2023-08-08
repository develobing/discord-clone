import { styled } from '@mui/system';
import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import MessagesHeader from './MessagesHeader';
import DateSeparator from './DateSeparator';

const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'calc(100% - 60px)',
  overflow: 'auto',
});

const Messages = ({ chosenChatDetails, messages }) => {
  const convertDateToHumanRedable = (date, format) => {
    const map = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear(),
    };

    return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
  };

  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username} />

      {messages.map((message, index) => {
        const messageDate = convertDateToHumanRedable(
          new Date(message.date),
          'dd/mm/yy'
        );
        const sameAuthor =
          index > 0 && messages[index - 1].author?._id === message.author?._id;
        const sameDay =
          index > 0 &&
          convertDateToHumanRedable(
            new Date(messages[index - 1].date),
            'dd/mm/yy'
          ) === messageDate;

        return (
          <div key={message._id} style={{ width: '97%' }}>
            {(!sameDay || index === 0) && (
              <DateSeparator date={messageDate}></DateSeparator>
            )}
            <Message
              content={message.content}
              username={message.author?.username}
              date={messageDate}
              sameAuthor={sameAuthor}
              sameDay={sameDay}
            ></Message>
          </div>
        );
      })}
    </MainContainer>
  );
};

const mapStateToProps = ({ chat }) => ({
  ...chat,
});

export default connect(mapStateToProps)(Messages);
