const alertActions = {
  OPEN_ALERT_MESSAGE: 'ALERT.OPEN_ALERT_MESSAGE',
  CLOSE_ALERT_MESSAGE: 'ALERT.CLOSE_ALERT_MESSAGE',
};

export const getActions = (dispatch) => {
  return {
    openAlertMessage: (message) => dispatch(openAlertMessage(message)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  };
};

export const openAlertMessage = (message) => ({
  type: alertActions.OPEN_ALERT_MESSAGE,
  payload: message,
});

export const closeAlertMessage = () => ({
  type: alertActions.CLOSE_ALERT_MESSAGE,
});

export default alertActions;
