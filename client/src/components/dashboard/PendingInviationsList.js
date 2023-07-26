import React from 'react';
import { styled } from '@mui/system';
import PendingInviationsListItem from './PendingInviationsListItem';

const DUMMY_INVITATIONS = [
  {
    _id: 'i1',
    senderId: {
      username: 'Mark',
      email: 'mark@gmail.com',
    },
  },
  {
    _id: 'i2',
    senderId: {
      username: 'James',
      email: 'james@gmail.com',
    },
  },
];

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  overflow: 'auto',
});

const PendingInviationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitation) => (
        <PendingInviationsListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          email={invitation.senderId.email}
        >
          {invitation.senderId.username}
        </PendingInviationsListItem>
      ))}
    </MainContainer>
  );
};

export default PendingInviationsList;
