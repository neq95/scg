import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import authReducer from './slices/auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();