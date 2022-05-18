import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const selectProjectPriorities = (state: RootState) => state.projectPriorities;

export const getStatus = createSelector(selectProjectPriorities, (priorities) => priorities.status);
export const getError = createSelector(selectProjectPriorities, (priorities) => priorities.error);
export const getAllPriorityIds = createSelector(selectProjectPriorities, (priorities) => priorities.priorities.allIds);
export const getPriorityById = (state: RootState, id: string) => state.projectPriorities.priorities.byId[id];

export default projectPrioritiesSlice.reducer;
