import * as api from '../../api';
import { openAlertMessage } from './alertActions';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => ({
  login: async (user, history) => dispatch(login(user, history)),
  register: (user, history) => dispatch(register(user, history)),
  setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
});

const setUserDetails = (userDetails) => ({
  type: authActions.SET_USER_DETAILS,
  payload: userDetails,
});

const login = (userInfo, navigate) => async (dispatch) => {
  try {
    const response = await api.login(userInfo);
    const responseData = response.data || {};
    const { data, message, isSuccess } = responseData;

    if (isSuccess) {
      const { user, token } = data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      dispatch(setUserDetails(user));
      navigate('/dashboard');
    } else {
      const errorMessage = message || 'Something went wrong!';
      dispatch(openAlertMessage(errorMessage));
    }
  } catch (error) {
    console.log('login() - error', error);
  }
};

const register = (userInfo, navigate) => async (dispatch) => {
  try {
    const response = await api.register(userInfo);
    const responseData = response.data || {};
    const { data, message, isSuccess } = responseData;

    if (isSuccess) {
      const { user, token } = data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));
      dispatch(setUserDetails(user));
      navigate('/dashboard');
    } else {
      const errorMessage = message || 'Something went wrong!';
      dispatch(openAlertMessage(errorMessage));
    }
  } catch (error) {
    console.log('register() - error', error);
  }
};
