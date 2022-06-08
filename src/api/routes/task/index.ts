import API from 'api/axios';
import { Pagination } from 'models/request';
import { Task } from 'models/Task';

import { createTaskRequest, createTaskResponse } from './types';

export type getTasksRequestType = {
  projectId: string;
}

export type getTasksResponseType = {
  status: string;
  success: boolean;
  content: Record<string, {items: Task[], pagination: Pagination}>;
}

export const getTasks = (payload: getTasksRequestType) => {
  return API.get<getTasksResponseType>(`api/v1/project/${payload.projectId}/tasks`);
};

const createTask = (payload: createTaskRequest) => {
  return API.post<createTaskResponse>(`api/v1/project/${payload.projectId}/task`, {title: payload.title, priorityID: payload.priorityId, stageID: '19f0756b-9433-4a26-908c-7886678ffe87'});
};

export default {
  createTask,
};