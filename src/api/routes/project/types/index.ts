import { successResponse } from 'api/types';
import { Project, ProjectPriority } from 'models/Project';
import { Pagination } from 'models/request';


type getProjectListRequest = {
  from: number;
  to: number;
};

type getProjectListResponse = successResponse<{
  items: Project[];
  pagination: Pagination;
}>;

type getProjectPrioritiesRequest = {
  projectId: string;
}

type getProjectPrioritiesResponse = successResponse<{
  items: ProjectPriority[],
}>;

export type {
  getProjectListRequest,
  getProjectListResponse,
  getProjectPrioritiesRequest,
  getProjectPrioritiesResponse,
};