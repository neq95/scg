import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTasks, getTasksRequestType, getTasksResponseType } from 'api/routes/task';
import { Statuses } from 'models/Enums/Statuses';
import { NormalizedItems, Pagination } from 'models/request';
import { Task } from 'models/Task';
import { RootState } from 'store';

export const fetchTasks = createAsyncThunk('tasks/fetch', async (payload: getTasksRequestType) => {
  const response = await getTasks(payload);

  return response.data.content;
});

type tasksByPriorityType = Record<string, {ids: string[], pagination: Pagination}>;

const prepareData = (tasks: getTasksResponseType['content']) => {
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


type State = {
  status: Statuses;
  tasks: NormalizedItems<Task>,
  tasksByPriority: tasksByPriorityType,
  error: string | null;
}

const initialState: State = {
  status: Statuses.idle,
  tasks: {
    byId: {},
    allIds: [],
  },
  tasksByPriority: {},
  error: null,
};

const projectTasksSlice = createSlice({
  name: 'projectTasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = Statuses.loading;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<getTasksResponseType['content']>) => {
        const preparedData = prepareData(action.payload);
        
        state.status = Statuses.succeeded;
        state.tasks = preparedData.tasks;
        state.tasksByPriority = preparedData.tasksByPriority;
      });
  }
});

export default projectTasksSlice.reducer;

export const getPriorityTaskIdsById = (state: RootState, id: string) => {
  const tasksByPriority = state.projectTasks.tasksByPriority;

  if (!tasksByPriority[id]) {
    return [];
  }

  return state.projectTasks.tasksByPriority[id].ids;
};
export const getTaskById = (state: RootState, id: string) => state.projectTasks.tasks.byId[id];