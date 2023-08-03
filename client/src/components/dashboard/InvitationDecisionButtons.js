import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';

const InvitationDecisionButtons = ({
  disabled,
  acceptFriendInvitation,
  rejectFriendInvitation,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        style={{ color: 'white' }}
        dislabed={disabled.toString()}
        onClick={acceptFriendInvitation}
      >
        <CheckIcon />
      </IconButton>

      <IconButton
        style={{ color: 'white' }}
        dislabed={disabled.toString()}
        onClick={rejectFriendInvitation}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
