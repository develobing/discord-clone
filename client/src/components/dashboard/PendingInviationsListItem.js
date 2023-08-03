import React, { useState } from 'react';
import { Tooltip, Box, Typography } from '@mui/material';
import Avatar from '../shared/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const PendingInviationsListItem = ({
  id,
  username,
  email,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  return (
    <Tooltip title={email}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Avatar username={username}></Avatar>
          <Typography
            style={{
              marginLeft: '7px',
              fontWeight: 700,
              color: '#8e9297',
              flexGrow: 1,
            }}
          >
            {username}
          </Typography>

          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptFriendInvitation={handleAcceptInvitation}
            rejectFriendInvitation={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(null, mapActionsToProps)(PendingInviationsListItem);
