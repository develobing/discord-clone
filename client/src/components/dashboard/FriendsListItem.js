import { Button, Typography } from '@mui/material';
import React from 'react';
import Avatar from '../shared/Avatar';
import OnlineIndicator from './OnlineIndicator';

const FriendsListItem = ({ _id, username, isOnline }) => {
  return (
    <Button
      style={{
        width: '100%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textTransform: 'none',
        color: 'black',
        position: 'relative',
      }}
    >
      <Avatar username={username} isOnline={isOnline} />
      <Typography
        style={{ marginLeft: '7px', fontWeight: 700, color: '#8e9297' }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>

      {isOnline ? <OnlineIndicator /> : ''}
    </Button>
  );
};

export default FriendsListItem;
