import API from 'api/axios';

import {
  getTasksRequest,
  getTasksResponse,
  createTaskRequest,
  createTaskResponse,
  updateTaskRequest,
  updateTaskResponse,
} from './types';

const getTasks = (payload: getTasksRequest) => {
  return API.get<getTasksResponse>(`api/v1/project/${payload.projectId}/tasks`);
};

const createTask = (payload: createTaskRequest) => {
  return API.post<createTaskResponse>(`api/v1/project/${payload.projectId}/task`, {title: payload.title, priorityID: payload.priorityId, stageID: '19f0756b-9433-4a26-908c-7886678ffe87'});
};

const updateTask = (payload: updateTaskRequest) => {
  return API.put<updateTaskResponse>(`api/v1/project/${payload.projectId}/task/${payload.taskId}`, {title: payload.title, description: payload.description});
};

export default {
  getTasks,
  createTask,
  updateTask,
};