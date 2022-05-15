import API from 'api/axios';

import { Project, ProjectPriority } from 'models/Project';
import { Pagination } from 'models/request';

export type getProjectListRequestType = {
  from: number;
  to: number;
};

export type getProjectListResponseType = {
  success: boolean;
  status: string;
  content: {
    items: Project[];
    pagination: Pagination;
  };
}

export type getProjectPrioritiesRequestType = {
  projectId: string;
}

export type getProjectPrioritiesResponseType = {
  success: boolean;
  status: string;
  content: {
    items: ProjectPriority[],
  }
}

export const getProjectList = (payload: getProjectListRequestType) => {
  return API.get<getProjectListResponseType>('api/v1/projects', {params: payload});
};

export const getProjectPriorities = (payload: getProjectPrioritiesRequestType) => {
  return API.get<getProjectPrioritiesResponseType>(`api/v1/project/${payload.projectId}/priorities`);
};