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
            error,
          },
        };
  }
};

// Secure routes
const checkResponseCode = (error) => {
  const responseCode = error?.response?.status;

  if (responseCode === 401 || responseCode === 403) logout();
};
