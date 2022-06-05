import { createAsyncThunk } from '@reduxjs/toolkit';

import Api from 'api';

const getUser = createAsyncThunk('auth/getUser', async () => {
  const response = await Api.auth.getUser();

  return response.data.content;
});

export {
  getUser,
};