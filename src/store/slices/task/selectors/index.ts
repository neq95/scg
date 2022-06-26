import { RootState } from 'store';

import { createSelector } from '@reduxjs/toolkit';

const getTask = (state: RootState) => state.task;

const getStatus = createSelector(getTask, (task) => task.status);

const getTitle = createSelector(getTask, (task) => task.title);

const getDescription = createSelector(getTask, (task) => task.description);

export {getStatus, getTitle, getDescription};