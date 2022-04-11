import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {
  register as registerRequest,
  registerRequestType,
  login as loginRequest,
  loginRequestType
} from 'api/routes';

export const register = createAsyncThunk('auth/register', async (
  payload: registerRequestType,
) => {
  const response = await registerRequest(payload);

  return response.data;
});

export const login = createAsyncThunk('auth/login', async (
  payload: loginRequestType
) => {
  const response = await loginRequest(payload);

  return response.data;
});

const initialState = {
  id: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
});

export default authSlice.reducer;