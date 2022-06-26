import { createAsyncThunk } from '@reduxjs/toolkit';

import Api from 'api';
import { RootState } from 'store';
import { Task } from 'models/Task';

export const updateTitle = createAsyncThunk<
  {id: Task['id'], title: Task['title']} | void,
  {title: Task['title']},
  {state: RootState}
>('task/updateTitle', async (payload, {getState}) => {
  const {id: projectId} = getState().project;
  const {id: taskId} = getState().task;

  if (!projectId || !taskId) {
    return;
  }

  await Api.task.updateTask({projectId, taskId, title: payload.title});

  return {id: taskId, title: payload.title};
});

export const updateDescription = createAsyncThunk<
  {description: Task['description']} | void,
  {description: Task['description']},
  {state: RootState}
>('task/updateDescription', async (payload, {getState}) => {
  const {id: projectId} = getState().project;
  const {id: taskId, title} = getState().task; //title на бэк отдается временно, пока апи этого требует

  if (!projectId || !taskId) {
    return;
  }

  await Api.task.updateTask({projectId, taskId, title, description: payload.description});

  return {description: payload.description};
});
