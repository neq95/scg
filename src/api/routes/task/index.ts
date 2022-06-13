import API from 'api/axios';

import {
  createTaskRequest,
  createTaskResponse,
  getTasksRequest,
  getTasksResponse
} from './types';

const getTasks = (payload: getTasksRequest) => {
  return API.get<getTasksResponse>(`api/v1/project/${payload.projectId}/tasks`);
};

const createTask = (payload: createTaskRequest) => {
  return API.post<createTaskResponse>(`api/v1/project/${payload.projectId}/task`, {title: payload.title, priorityID: payload.priorityId, stageID: '19f0756b-9433-4a26-908c-7886678ffe87'});
};

export default {
  getTasks,
  createTask,
};