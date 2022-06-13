import { createAsyncThunk } from '@reduxjs/toolkit';

import Api from 'api';
import { RootState } from 'store';
import { createTaskRequest } from 'api/routes/task/types';
import { Task } from 'models/Task';
import { getProjectPriorities, getProjectPrioritiesRequestType } from 'api/routes/project';
import { getTasks, getTasksRequestType } from 'api/routes/task';

export const createTask = createAsyncThunk<
  Task | void,
  {priorityId: createTaskRequest['priorityId'], title: createTaskRequest['title']},
  {state: RootState}>('tasks/create', async (payload, {getState}) => {
    const {id} = getState().project;

    if (!id) {
      return;
    }

    const data: createTaskRequest = {
      ...payload,
      projectId: id,
    };
    const response = await Api.task.createTask(data);

    return response.data.content as Task;
});

export const fetchProjectPriorities = createAsyncThunk('project/priorities/fetch', async (payload: getProjectPrioritiesRequestType) => {
  const response = await getProjectPriorities(payload);

  return response.data.content;
});


export const fetchTasks = createAsyncThunk('tasks/fetch', async (payload: getTasksRequestType) => {
  const response = await getTasks(payload);

  return response.data.content;
});