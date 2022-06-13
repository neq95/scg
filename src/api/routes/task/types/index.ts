import { successResponse } from 'api/types';
import { Pagination } from 'models/request';
import { Task } from 'models/Task';

type createTaskRequest = {
  projectId: string;
  title: Task['title'];
  priorityId: string;
}

type createTaskResponse = successResponse<Task>;

type getTasksRequest = {
  projectId: string;
}

type getTasksResponse = successResponse<Record<string, {items: Task[], pagination: Pagination}>>;

export type {
  createTaskRequest,
  createTaskResponse,
  getTasksRequest,
  getTasksResponse
};



