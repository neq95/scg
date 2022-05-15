import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Statuses } from 'models/Enums/Statuses';
import { getProjectPriorities, getProjectPrioritiesRequestType } from 'api/routes/project';

export const fetchProjectPriorities = createAsyncThunk('project/priorities/fetch', async (payload: getProjectPrioritiesRequestType) => {
  const response = await getProjectPriorities(payload);

  console.log(response);
});

const initialState = {
  status: Statuses.idle,
  priorities: [],
  error: null,
};

const projectPrioritiesSlice = createSlice({
  name: 'projectPriorities',
  initialState,
  reducers: {

  }
});

export default projectPrioritiesSlice.reducer;
