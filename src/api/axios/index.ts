import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://safe-reef-92585.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json '
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      config.headers = {};
    }

    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common.Authorization;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;