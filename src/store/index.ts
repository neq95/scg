import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import authReducer from './slices/auth';
import projectListReducer from './slices/project/list';
import projectPrioritiesReducer from './slices/project/priorities';
import projectTasksReducer from './slices/project/tasks';

const store = configureStore({
  reducer: {
    auth: authReducer,
    projectList: projectListReducer,
    projectPriorities: projectPrioritiesReducer,
    projectTasks: projectTasksReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();