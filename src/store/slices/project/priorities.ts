import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { Statuses } from 'models/Enums/Statuses';
import { getProjectPriorities, getProjectPrioritiesRequestType } from 'api/routes/project';
import { ProjectPriority } from 'models/Project';
import { NormalizedItems } from 'models/request';

export const fetchProjectPriorities = createAsyncThunk('project/priorities/fetch', async (payload: getProjectPrioritiesRequestType) => {
  const response = await getProjectPriorities(payload);

  return response.data.content;
});

const prepareData = (priorities: ProjectPriority[]) => {
  const result: NormalizedItems<ProjectPriority> = {
    byId: {},
    allIds: [],
  };

  priorities.forEach((priority) => {
    result.byId[priority.id] = priority;
    result.allIds[priority.sort] = priority.id; 
  });

  return result;
};

type State = {
  status: Statuses;
  priorities: NormalizedItems<ProjectPriority>;
  error: string | null;
}

const initialState: State = {
  status: Statuses.idle,
  priorities: {
    byId: {},
    allIds: [],
  },
  error: null,
};

const projectPrioritiesSlice = createSlice({
  name: 'projectPriorities',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectPriorities.pending, (state) => {
        state.status = Statuses.loading;
        state.error = null;
      })
      .addCase(fetchProjectPriorities.fulfilled, (state, action: PayloadAction<{items: ProjectPriority[]}>) => {
        const priorities = prepareData(action.payload.items);

        state.status = Statuses.succeeded;
        state.priorities = priorities;
      });
  }
});

export const getStatus = (state: RootState) => state.projectPriorities.status;
export const getError = (state: RootState) => state.projectPriorities.error;
export const getAllPriorityIds = (state: RootState) => state.projectPriorities.priorities.allIds;
export const getPriorityById = (state: RootState, id: string) => state.projectPriorities.priorities.byId[id];

export default projectPrioritiesSlice.reducer;
