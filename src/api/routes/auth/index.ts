import API from 'api/axios';

import { getUserResponse } from './types';

const getUser = () => {
  return API.get<getUserResponse>('api/v1/me');
};



export default {
  getUser,
};