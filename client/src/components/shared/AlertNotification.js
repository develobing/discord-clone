import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/alertActions';

const AlertNotification = ({
  closeAlertMessage,
  alertMessage,
  isShowAlert,
}) => {
  return (
    <>
      <Snackbar
        open={isShowAlert}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={closeAlertMessage}
      >
        <Alert severity="success">{alertMessage}</Alert>
      </Snackbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  isShowAlert: state.alert.isShowAlert,
  alertMessage: state.alert.alertMessage,
});

const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});

export default connect(mapStateToProps, mapActionsToProps)(AlertNotification);
