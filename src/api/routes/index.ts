import API from 'api/axios';

export type registerRequestType = {
  name: string,
  surname: string,
  email: string,
  password: string,
};

export type registerResponseType = {
  success: boolean,
}

export type loginRequestType = {
  email: string,
  password: string,
}

export const register = (payload: registerRequestType) => {
  return API.post<registerResponseType>('/register', payload);
};

export const login = (payload: loginRequestType) => {
  return API.post('/login', payload);
};

export const getProjects = (from: number, to: number) => {
  return API.get('/api/v1/projects', {
    params: {
      from,
      to,
    }
  });
};