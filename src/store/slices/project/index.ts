import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProjectPriorities, getProjectPrioritiesRequestType } from 'api/routes/project';
import { getTasks, getTasksRequestType, getTasksResponseType, createTaskRequestType, createTask as createTaskRequest } from 'api/routes/task';
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
  id: string | null;
  priorities: NormalizedItems<ProjectPriority>;
  tasks: NormalizedItems<Task>,
  tasksByPriority: tasksByPriorityType,
  taskAdditingInPriority: string | null, 
  error: errorType | null;
}

const preparePriorities = (priorities: ProjectPriority[]) => {
  const result: NormalizedItems<ProjectPriority> = {
    byId: {},
    allIds: [],
  };

  // for (let circle = 0; circle < 5; circle++) {
  //   priorities.forEach((priority) => {
  //     const id = `${priority.id}${circle > 0 ? circle : ''}`;
  //     const sort = priority.sort + (circle > 0 ? circle + 2 : 0) - 1;
  //     result.byId[id] = priority;
  //     result.allIds[sort] = id; 
  //   });
  // }

  priorities.forEach((priority) => {
    priority.taskAdditing = false;
    result.byId[priority.id] = priority;
    result.allIds[priority.sort] = priority.id; 
  });

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

    // for(let circle = 0; circle < 4; circle++) {
    //   tasks[key].items.forEach((item) => {
    //     const id = item.id + circle;
    //     result.tasks.byId[id] = item;
    //     result.tasks.allIds.push(id);
    //     priorityTaskIds.push(id);
    //   });
    // }

    tasks[key].items.forEach((item) => {
      result.tasks.byId[item.id] = item;
      result.tasks.allIds.push(item.id);
      priorityTaskIds.push(item.id);
    });

    result.tasksByPriority[key] = {
      ids: priorityTaskIds,
      pagination: tasks[key].pagination,
    };
  });

  return result;
};

const initialState: State = {
  status: Statuses.idle,
  id: null,
  priorities: {
    byId: {},
    allIds: [],
  },
  tasks: {
    byId: {},
    allIds: [],
  },
  tasksByPriority: {},
  taskAdditingInPriority: null,
  error: null,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    initialized(state, action: PayloadAction<{projectId: string}>) {
      state.id = action.payload.projectId;
    },

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

    taskCreatingStarted(state, action: PayloadAction<{priorityId: string}>) {
      if (state.taskAdditingInPriority) {
        state.priorities.byId[state.taskAdditingInPriority].taskAdditing = false;
      }

      state.priorities.byId[action.payload.priorityId].taskAdditing = true;
      state.taskAdditingInPriority = action.payload.priorityId;
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

export const fetchProject = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const {id, status, error} = getState().project;

  if (!id || status === Statuses.loading) {
    return;
  }

  let sendRequests = [true, true];

  if (status === Statuses.failed && error) {
    sendRequests = error.rejectedRequests;
  }

  dispatch(fetchingStarted());

  const results = await Promise.allSettled([
    ...(sendRequests[0] ? [dispatch(fetchProjectPriorities({projectId: id}))] : []),
    ...(sendRequests[1] ? [dispatch(fetchTasks({projectId: id}))] : []),
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

export const createTask = createAsyncThunk<
  void,
  {priorityId: createTaskRequestType['priorityId'], title: createTaskRequestType['title']},
  {state: RootState}>('tasks/create', async (payload, {getState}) => {
    const {id} = getState().project;

    if (!id) {
      return;
    }

    const data: createTaskRequestType = {
      ...payload,
      projectId: id,
    };
    const response = await createTaskRequest(data);
    console.log(response);
});


const {initialized, fetchingStarted, fetchingSucceeded, fetchingFailed, taskCreatingStarted} = projectSlice.actions;

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
export {initialized, taskCreatingStarted};
