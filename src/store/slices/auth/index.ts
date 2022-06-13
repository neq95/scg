import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthUser } from 'models/User';
import { getUser } from './thunks';
import { Statuses } from 'models/Enums/Statuses';

// export const register = (payload: registerRequest) =>  async (dispatch: AppDispatch) => {
//   await dispatch(sendRegisterRequest(payload)).unwrap();
//   await dispatch(
//     login({email: payload.email, password: payload.password})
//   ).unwrap();
// };

// export const sendRegisterRequest = createAsyncThunk('auth/register', async (
//   payload: registerRequest,
// ) => {
//   const response = await Api.auth.register(payload);

//   return response.data;
// });

// export const login = createAsyncThunk('auth/login', async (
//   payload: loginRequest
// ) => {
//   const response = await Api.auth.login(payload);

//   const token = response.data.content.accessToken;
//   localStorage.setItem('token', token);
// });

type state = {
  status: Statuses;
  user: AuthUser | null;
}

const initialState: state = {
  status: Statuses.idle,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.rejected, (state) => {
        state.status = Statuses.failed;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<AuthUser>) => {
        state.status = Statuses.succeeded;
        state.user = action.payload;
      });
  }
});

export default authSlice.reducer;