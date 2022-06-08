import { successResponse } from 'api/types';
import { Task } from 'models/Task';

type createTaskRequest = {
  projectId: string;
  title: Task['title'];
  priorityId: string;
}

type createTaskResponse = successResponse<Task>

export type {createTaskRequest, createTaskResponse};



