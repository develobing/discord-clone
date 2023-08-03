import React from 'react';
import { styled } from '@mui/material';
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = ({ friends, onlineUsers }) => {
  const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    return friends.map((friend) => {
      const isOnline = onlineUsers.some((user) => user._userId === friend._id);

      return {
        ...friend,
        isOnline,
      };
    });
  };

  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((friend) => (
        <FriendsListItem
          key={friend._id}
          _id={friend._id}
          username={friend.username}
          isOnline={friend.isOnline}
        ></FriendsListItem>
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({ friends }) => ({ ...friends });

export default connect(mapStateToProps)(FriendsList);
