import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProjectPriorities, getProjectPrioritiesRequestType } from 'api/routes/project';
import { getTasks, getTasksRequestType, getTasksResponseType } from 'api/routes/task';
import { Statuses } from 'models/Enums/Statuses';
import { NormalizedItems, Pagination } from 'models/request';
import { Task } from 'models/Task';
import { RootState } from 'store';
import { ProjectPriority } from 'models/Project';
import { AppDispatch } from 'store';

type tasksByPriorityType = Record<string, {ids: string[], pagination: Pagination}>;

type errorType = {
  message: string;
  rejectedRequests: boolean[];
};

type State = {
  status: Statuses;
  priorities: NormalizedItems<ProjectPriority>;
  tasks: NormalizedItems<Task>,
  tasksByPriority: tasksByPriorityType,
  error: errorType | null;
}

const preparePriorities = (priorities: ProjectPriority[]) => {
  const result: NormalizedItems<ProjectPriority> = {
    byId: {},
    allIds: [],
  };

  for (let circle = 0; circle < 5; circle++) {
    priorities.forEach((priority) => {
      const id = `${priority.id}${circle > 0 ? circle : ''}`;
      const sort = priority.sort + (circle > 0 ? circle + 2 : 0) - 1;
      result.byId[id] = priority;
      result.allIds[sort] = id; 
    });
  }

  // priorities.forEach((priority) => {
  //   result.byId[priority.id] = priority;
  //   result.allIds[priority.sort] = priority.id; 
  // });

  return result;
};

const prepareTasks = (tasks: getTasksResponseType['content']) => {
  type Result = {
    tasks: NormalizedItems<Task>;
    tasksByPriority: tasksByPriorityType;
  }

  const result: Result = {
    tasks: {
      byId: {},
      allIds: [],
    },
    tasksByPriority: {},
  };


  Object.keys(tasks).forEach((key) => {
    const priorityTaskIds: string[] = [];

    for(let circle = 0; circle < 4; circle++) {
      tasks[key].items.forEach((item) => {
        const id = item.id + circle;
        result.tasks.byId[id] = item;
        result.tasks.allIds.push(id);
        priorityTaskIds.push(id);
      });
    }

    // tasks[key].items.forEach((item) => {
    //   result.tasks.byId[item.id] = item;
    //   result.tasks.allIds.push(item.id);
    //   priorityTaskIds.push(item.id);
    // });

    result.tasksByPriority[key] = {
      ids: priorityTaskIds,
      pagination: tasks[key].pagination,
    };
  });

  return result;
};

const initialState: State = {
  status: Statuses.idle,
  priorities: {
    byId: {},
    allIds: [],
  },
  tasks: {
    byId: {},
    allIds: [],
  },
  tasksByPriority: {},
  error: null,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    fetchingStarted(state) {
      state.status = Statuses.loading;
    },
    fetchingSucceeded(state) {
      state.status = Statuses.succeeded;
    },
    fetchingFailed(state, action: PayloadAction<{message: string, rejectedRequests: boolean[]}>) {
      state.status = Statuses.failed;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectPriorities.fulfilled, (state, action: PayloadAction<{items: ProjectPriority[]}>) => {
        const priorities = preparePriorities(action.payload.items);
        state.priorities = priorities;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<getTasksResponseType['content']>) => {
        const preparedData = prepareTasks(action.payload);
        state.tasks = preparedData.tasks;
        state.tasksByPriority = preparedData.tasksByPriority;
      });
  }
});

export const fetchProject = (payload: getProjectPrioritiesRequestType | getTasksRequestType) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const {status, error} = getState().project;

  if (status === Statuses.loading) {
    return;
  }

  let sendRequests = [true, true];

  if (status === Statuses.failed && error) {
    sendRequests = error.rejectedRequests;
  }

  dispatch(fetchingStarted());

  const results = await Promise.allSettled([
    ...(sendRequests[0] ? [dispatch(fetchProjectPriorities(payload))] : []),
    ...(sendRequests[1] ? [dispatch(fetchTasks(payload))] : []),
  ]);

  const rejectedRequests: boolean[] = [];

  results.forEach((result, index) => {
    rejectedRequests[index] = result.status === 'rejected';
  });

  if (rejectedRequests.includes(true)) {
    dispatch(fetchingFailed({
      message: 'error',
      rejectedRequests,
    }));
  } else {
    dispatch(fetchingSucceeded());
  }
};

export const fetchProjectPriorities = createAsyncThunk('project/priorities/fetch', async (payload: getProjectPrioritiesRequestType) => {
  const response = await getProjectPriorities(payload);

  return response.data.content;
});


export const fetchTasks = createAsyncThunk('tasks/fetch', async (payload: getTasksRequestType) => {
  const response = await getTasks(payload);

  return response.data.content;
});


const {fetchingStarted, fetchingSucceeded, fetchingFailed} = projectSlice.actions;

export default projectSlice.reducer;

const getProject = (state: RootState) => state.project;

export const getStatus = createSelector(getProject, (project) => project.status);
export const getError = createSelector(getProject, (project) => project.error);

export const getAllPriorityIds = createSelector(getProject, (project) => project.priorities.allIds);
export const getPriorityById = (state: RootState, id: string) => state.project.priorities.byId[id];

export const getPriorityTaskIdsById = (state: RootState, id: string) => {
  const tasksByPriority = state.project.tasksByPriority;

  if (!tasksByPriority[id]) {
    return [];
  }

  return state.project.tasksByPriority[id].ids;
};
export const getTaskById = (state: RootState, id: string) => state.project.tasks.byId[id];
