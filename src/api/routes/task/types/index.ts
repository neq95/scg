import { successResponse } from 'api/types';
import { Pagination } from 'models/request';
import { Task } from 'models/Task';

type getTasksRequest = {
  projectId: string;
}

type getTasksResponse = successResponse<Record<string, {items: Task[], pagination: Pagination}>>;

type createTaskRequest = {
  projectId: string;
  title: Task['title'];
  priorityId: string;
}

type createTaskResponse = successResponse<Task>;

type updateTaskRequest = {
  projectId: string;
  taskId: string;
  title?: string,
  description?: string,
};

type updateTaskResponse = successResponse<null>;

export type {
  getTasksRequest,
  getTasksResponse,
  createTaskRequest,
  createTaskResponse,
  updateTaskRequest,
  updateTaskResponse,
};



