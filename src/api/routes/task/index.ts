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

export const getTasks = (payload: getTasksRequestType) => {
  return API.get<getTasksResponseType>(`api/v1/project/${payload.projectId}/tasks`);
};