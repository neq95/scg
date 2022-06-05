import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import { AppDispatch } from 'store';
import {
  register as registerRequest,
  registerRequestType,
  login as loginRequest,
  loginRequestType
} from 'api/routes';
import { AuthUser } from 'models/User';
import { getUser } from './thunks';

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

type state = {
  isAuthenticated: boolean;
  user: AuthUser | null;
}

const initialState: state = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userAuthenticated(state) {
      state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action: PayloadAction<AuthUser>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      });
  }
});

const {userAuthenticated} = authSlice.actions;

export {userAuthenticated};
export default authSlice.reducer;