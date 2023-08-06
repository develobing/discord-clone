import React from 'react';
import { styled } from '@mui/system';
import Avatar from '../../../shared/Avatar.js';
import { Typography } from '@mui/material';

const MainContainer = styled('div')({
  display: 'flex',
  width: '97%',
  marginTop: '10px',
});

const AvatarContainer = styled('div')({
  width: '70px',
});

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const MessageContent = styled('div')({
  color: '#dcddde',
});

const SameAuthorMessagContent = styled('div')({
  color: '#dcddde',
  width: '97%',
});

const SameAuthorMessageText = styled('div')({
  marginLeft: '70px',
});

const Message = ({ content, username, date, sameAuthor, sameDay }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessagContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessagContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>

      <MessageContainer>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#b9bbbe',
          }}
        >
          {username}
          <span style={{ fontSize: '12px', marginLeft: '5px' }}>{date}</span>
        </Typography>

        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
