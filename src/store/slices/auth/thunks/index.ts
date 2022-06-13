import { createAsyncThunk } from '@reduxjs/toolkit';

import Api from 'api';
import { loginRequest, registerRequest } from 'api/routes/auth/types';
import { AppDispatch } from 'store';

const sendRegisterRequest = createAsyncThunk('auth/register', async (
  payload: registerRequest,
) => {
  const response = await Api.auth.register(payload);

  return response.data;
});

const register = (payload: registerRequest) =>  async (dispatch: AppDispatch) => {
  await dispatch(sendRegisterRequest(payload)).unwrap();
  await dispatch(
    login({email: payload.email, password: payload.password})
  ).unwrap();
};

const login = createAsyncThunk('auth/login', async (
  payload: loginRequest
) => {
  const response = await Api.auth.login(payload);

  const token = response.data.content.accessToken;
  localStorage.setItem('token', token);
});

const getUser = createAsyncThunk('auth/getUser', async () => {
  const response = await Api.auth.getUser();

  return response.data.content;
});

export {
  register,
  sendRegisterRequest,
  login,
  getUser,
};