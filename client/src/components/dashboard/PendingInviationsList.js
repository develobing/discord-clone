import React from 'react';
import { styled } from '@mui/system';
import PendingInviationsListItem from './PendingInviationsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  overflow: 'auto',
});

const PendingInviationsList = ({ pendingFriendsInvitations }) => {
  return (
    <MainContainer>
      {pendingFriendsInvitations?.map((invitation) => (
        <PendingInviationsListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.sender.username}
          email={invitation.sender.email}
        >
          {invitation.sender.username}
        </PendingInviationsListItem>
      ))}
    </MainContainer>
  );
};

const mapStateToProps = (state) => ({
  pendingFriendsInvitations: state.friends.pendingFriendsInvitations,
});

export default connect(mapStateToProps)(PendingInviationsList);
