import { createSlice } from '@reduxjs/toolkit';

import { Statuses } from 'models/Enums/Statuses';

const initialState = {
  status: Statuses.idle,
  priorities: [],
  error: null,
};

const projectDetailSlice = createSlice({
  name: 'projectDetail',
  initialState,
  reducers: {

  }
});

export default projectDetailSlice.reducer;
