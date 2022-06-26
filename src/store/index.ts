import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import authReducer from './slices/auth';
import projectListReducer from './slices/project/list';
import projectReducer from './slices/project';
import taskReducer from './slices/task';

const store = configureStore({
  reducer: {
    auth: authReducer,
    projectList: projectListReducer,
    project: projectReducer,
    task: taskReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();