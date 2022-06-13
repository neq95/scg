import { createAsyncThunk } from '@reduxjs/toolkit';

import Api from 'api';
import { RootState } from 'store';
import { createTaskRequest } from 'api/routes/task/types';
import { Task } from 'models/Task';
import { getProjectPrioritiesRequest } from 'api/routes/project/types';
import { getTasksRequest } from 'api/routes/task/types';

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

export const fetchProjectPriorities = createAsyncThunk('project/priorities/fetch', async (payload: getProjectPrioritiesRequest) => {
  const response = await Api.project.getProjectPriorities(payload);

  return response.data.content;
});


export const fetchTasks = createAsyncThunk('tasks/fetch', async (payload: getTasksRequest) => {
  const response = await Api.task.getTasks(payload);

  return response.data.content;
});