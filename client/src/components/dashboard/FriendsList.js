import React from 'react';
import { styled } from '@mui/material';
import FriendsListItem from './FriendsListItem';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const DUMMY_FRIENDS = [
  {
    id: 'f1',
    name: 'John Doe',
    isOnline: true,
  },
  {
    id: 'f2',
    name: 'Jane Doe',
    isOnline: false,
  },
  {
    id: 'f3',
    name: 'John Smith',
    isOnline: true,
  },
];

const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => (
        <FriendsListItem
          key={friend.id}
          id={friend.id}
          username={friend.name}
          isOnline={friend.isOnline}
        ></FriendsListItem>
      ))}
    </MainContainer>
  );
};

export default FriendsList;
