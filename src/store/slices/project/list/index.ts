import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import { RootState } from 'store';
import { Pagination, NormalizedItems } from 'models/request';
import { Project } from 'models/Project';
import { Statuses } from 'models/Enums/Statuses';
import {
  getProjectListRequestType,
  getProjectList,
} from 'api/routes/project';

const prepareData = (projects: Project[]) => {
  const result: NormalizedItems<Project> = {
    byId: {},
    allIds: [],
  };

  projects.forEach((project) => {
    result.byId[project.id] = project;
    result.allIds.push(project.id);
  }); 

  return result;
};

export const fetchProjects = createAsyncThunk('projects/fetch', async (payload: getProjectListRequestType) => {
  const response = await getProjectList(payload);

  return response.data.content;
});

type State = {
  status: Statuses,
  projects: NormalizedItems<Project>,
  pagination: Pagination | null,
  error: string | null,
}

const initialState: State = {
  status: Statuses.idle,
  projects: {
    byId: {},
    allIds: [],
  },
  pagination: null,
  error: null,
};

export const projectListSlice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProjects.pending, (state) => {
      state.status = Statuses.loading;
      state.error = null;
    })
    .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<{items: Project[], pagination: Pagination}>) => {
      const preparedData = prepareData(action.payload.items);

      state.status = Statuses.succeeded;
      state.projects = preparedData;
      state.pagination = action.payload.pagination;
    });
  }
});

export const getStatus = (state: RootState) => state.projectList.status;
export const getProjectIds = (state: RootState) => state.projectList.projects.allIds;
export const getProjectById = (state: RootState, id: string) => state.projectList.projects.byId[id];

export default projectListSlice.reducer;