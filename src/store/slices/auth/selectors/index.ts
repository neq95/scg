import { RootState } from 'store';

const getIsAuthenticated = (state: RootState) => {
  return state.auth.isAuthenticated;
};

export {
  getIsAuthenticated,
};