import API from 'api/axios';

import {
  getUserResponse,
  registerRequest,
  registerResponse,
  loginRequest,
  loginResponse
} from './types';

const getUser = () => {
  return API.get<getUserResponse>('api/v1/me');
};

const register = (payload: registerRequest) => {
  return API.post<registerResponse>('/register', payload);
};

const login = (payload: loginRequest) => {
  return API.post<loginResponse>('/login', payload);
};

export default {
  register,
  login,
  getUser,
};