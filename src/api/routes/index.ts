import API from 'api/axios';

export const register = (
  name: string, 
  surname: string, 
  email: string, 
  password: string
) => {
  return API.post('/register', {
    name,
    surname,
    email,
    password,
  });
};

export const login = (
  email: string,
  password: string,
) => {
  return API.post('/login', {
    email,
    password,
  });
};

export const getProjects = (from: number, to: number) => {
  return API.get('/api/v1/projects', {
    params: {
      from,
      to,
    }
  });
};