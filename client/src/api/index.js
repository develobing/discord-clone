import axios from 'axios';
import { logout } from '../utils/auth';

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (error) {
    console.log('login() - error', error);

    return error.response
      ? error.response
      : {
          data: {
            isSuccess: false,
            message: 'Something went wrong!',
            error,
          },
        };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (error) {
    console.log('register() - error', error);

    return error.response
      ? error.response
      : {
          data: {
            isSuccess: false,
            message: 'Something went wrong!',
            error,
          },
        };
  }
};

// Secure routes
export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friends/invite', data);
  } catch (error) {
    checkResponseCode(error);

    return error.response
      ? error.response
      : {
          data: {
            isSuccess: false,
            message: 'Something went wrong!',
            error,
          },
        };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friends/accept', data);
  } catch (error) {
    checkResponseCode(error);

    return error.response
      ? error.response
      : {
          data: {
            isSuccess: false,
            message: 'Something went wrong!',
            error,
          },
        };
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friends/reject', data);
  } catch (error) {
    checkResponseCode(error);

    return error.response
      ? error.response
      : {
          data: {
            isSuccess: false,
            message: 'Something went wrong!',
            error,
          },
        };
  }
};

const checkResponseCode = (error) => {
  const responseCode = error?.response?.status;
  const isNotAuthroized = responseCode === 401 || responseCode === 403;

  if (isNotAuthroized) logout();
};
