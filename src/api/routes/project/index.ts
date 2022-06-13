import API from 'api/axios';
import {
  getProjectListRequest,
  getProjectListResponse,
  getProjectPrioritiesRequest,
  getProjectPrioritiesResponse
} from './types';

const getProjectList = (payload: getProjectListRequest) => {
  return API.get<getProjectListResponse>('api/v1/projects', {params: payload});
};

const getProjectPriorities = (payload: getProjectPrioritiesRequest) => {
  return API.get<getProjectPrioritiesResponse>(`api/v1/project/${payload.projectId}/priorities`);
};

export default {
  getProjectList,
  getProjectPriorities,
};