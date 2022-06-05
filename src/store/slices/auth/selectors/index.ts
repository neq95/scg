import { RootState } from 'store';

const getStatus = (state: RootState) => {
  return state.auth.status;
};

export {
  getStatus,
};