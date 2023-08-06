import { Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';

const ChoosenOptionLabel = ({ username }) => {
  return (
    <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: 'bold' }}>
      {username ? `@${username}` : 'Choose a conversation'}
    </Typography>
  );
};

const mapStateToProps = (state) => ({
  username: state.chat.chosenChatDetails?.username,
});

export default connect(mapStateToProps)(ChoosenOptionLabel);
