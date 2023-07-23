import { authActions } from '../actions/authActions';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        user: action.payload,
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;
