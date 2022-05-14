import API from 'api/axios';

import { Project } from 'models/Project';
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

export const getProjectList = (payload: getProjectListRequestType) => {
  return API.get<getProjectListResponseType>('api/v1/projects', {params: payload});
};