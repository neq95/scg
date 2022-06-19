import { createAsyncThunk } from '@reduxjs/toolkit';

import Api from 'api';
import { RootState } from 'store';
import { createTaskRequest, getTasksRequest, updateTaskRequest } from 'api/routes/task/types';
import { Task } from 'models/Task';
import { getProjectPrioritiesRequest } from 'api/routes/project/types';

export const fetchProjectPriorities = createAsyncThunk('project/priorities/fetch', async (payload: getProjectPrioritiesRequest) => {
  const response = await Api.project.getProjectPriorities(payload);

  return response.data.content;
});


export const fetchTasks = createAsyncThunk('tasks/fetch', async (payload: getTasksRequest) => {
  const response = await Api.task.getTasks(payload);

  return response.data.content;
});

export const createTask = createAsyncThunk<
  Task | void,
  Omit<createTaskRequest, 'projectId'>,
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

export type UpdatedTask = {
  id: string;
  content: {
    title?: string;
    description?: string;
  }
};

export const updateTask = createAsyncThunk<
  UpdatedTask | void,
  Omit<updateTaskRequest, 'projectId'>, 
  {state: RootState}
>('task/update', async (payload, {getState}) => {
  const {id} = getState().project;

  if (!id) {
    return;
  }

  const data: updateTaskRequest = {
    ...payload,
    projectId: id,
  };

  await Api.task.updateTask(data);

  return {
    id: payload.taskId,
    content: {
      title: payload.title,
      description: payload.description,
    },
  };
});