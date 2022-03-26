import axiosInstance from 'api/axios';

export const register = (
  name: string, 
  surname: string, 
  email: string, 
  password: string
) => {
  axiosInstance.post('/api/v1/register', {
    name,
    surname,
    email,
    password,
  });
};