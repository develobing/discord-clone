import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../utils/validators';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from '@mui/material';
import InputWithLabel from '../shared/InputWithLabel';
import CustomPrimaryButton from '../shared/CustomPrimaryButton';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
  isDialog,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendinvitation = () => {
    sendFriendInvitation({ email }, handleCloseDialog);
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail('');
  };

  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter your friend's email address to send them an invitation to
              join the chat.
            </Typography>

            <InputWithLabel
              label="Mail"
              type="text"
              value={email}
              setValue={setEmail}
              placeholder="Enter email address"
            ></InputWithLabel>
          </DialogContentText>

          <DialogActions
            style={{
              padding: 0,
            }}
          >
            <CustomPrimaryButton
              onClick={handleSendinvitation}
              disabled={!isFormValid}
              label="Send"
              additionalStyles={{
                margin: '5px 0 0 0',
              }}
            ></CustomPrimaryButton>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
