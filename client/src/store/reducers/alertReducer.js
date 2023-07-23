import alertActions from '../actions/alertActions';

const initialState = {
  isShowAlert: false,
  alertMessage: null,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        isShowAlert: true,
        alertMessage: action.payload,
      };
    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        isShowAlert: false,
        alertMessage: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
