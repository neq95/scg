import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import { AppDispatch } from 'store';
import {
  register as registerRequest,
  registerRequestType,
  login as loginRequest,
  loginRequestType
} from 'api/routes';

export const register = (payload: registerRequestType) =>  async (dispatch: AppDispatch) => {
  await dispatch(sendRegisterRequest(payload)).unwrap();
  await dispatch(
    login({email: payload.email, password: payload.password})
  ).unwrap();
};

export const sendRegisterRequest = createAsyncThunk('auth/register', async (
  payload: registerRequestType,
) => {
  const response = await registerRequest(payload);

  return response.data;
});

export const login = createAsyncThunk('auth/login', async (
  payload: loginRequestType
) => {
  const response = await loginRequest(payload);

  const token = response.data.content.accessToken;
  localStorage.setItem('token', token);
});

const initialState = {
  id: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    add(state) {
      return state;
    }
  },
});

export const {add} = authSlice.actions;

export default authSlice.reducer;