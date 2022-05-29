import API from 'api/axios';
import { Pagination } from 'models/request';
import { Task } from 'models/Task';

export type getTasksRequestType = {
  projectId: string;
}

export type getTasksResponseType = {
  status: string;
  success: boolean;
  content: Record<string, {items: Task[], pagination: Pagination}>;
}

export type createTaskRequestType = {
  projectId: getTasksRequestType['projectId'];
  title: Task['title'];
  priorityId: string;
}

export const getTasks = (payload: getTasksRequestType) => {
  return API.get<getTasksResponseType>(`api/v1/project/${payload.projectId}/tasks`);
};

export const createTask = (payload: createTaskRequestType) => {
  return API.post(`api/v1/project/${payload.projectId}/task`, {title: payload.title, priorityID: payload.priorityId});
};