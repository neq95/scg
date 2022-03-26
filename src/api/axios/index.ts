import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://safe-reef-92585.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json '
  }
});

export default instance;