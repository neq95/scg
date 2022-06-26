import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Statuses } from 'models/Enums/Statuses';

import {Task} from 'models/Task';
import { updateTitle, updateDescription } from './thunks';

type State = {
  status: Statuses;
  id: Task['id'] | null;
  title: Task['title'];
  description: Task['description'];
}

const initialState: State = {
  status: Statuses.idle,
  id: null,
  title: '',
  description: '',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    initialized(state, action: PayloadAction<Omit<State, 'status'>>) {
      // Пока нет апи для получения деталки таска, получаем напрямую из компонента
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.status = Statuses.succeeded;
    },
    titleChanged(state, action: PayloadAction<{title: State['title']}>) {
      state.title = action.payload.title;
    },
    descriptionChanged(state, action: PayloadAction<{description: State['description']}>) {
      state.description = action.payload.description;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTitle.fulfilled, (state, {payload}) => {
        if (!payload) {
          return;
        }

        state.title = payload.title;
      })
      .addCase(updateDescription.fulfilled, (state, {payload}) => {
        if (!payload) {
          return;
        }

        state.description = payload.description;
      });
  },
});

export default taskSlice.reducer;
export const {actions} = taskSlice;