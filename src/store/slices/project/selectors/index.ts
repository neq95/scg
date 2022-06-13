import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const getProject = (state: RootState) => state.project;

const getStatus = createSelector(getProject, (project) => project.status);

const getError = createSelector(getProject, (project) => project.error);

const getAllPriorityIds = createSelector(getProject, (project) => project.priorities.allIds);

const getPriorityById = (state: RootState, id: string) => state.project.priorities.byId[id];

const getPriorityTaskIdsById = (state: RootState, id: string) => {
  const tasksByPriority = state.project.tasksByPriority;

  if (!tasksByPriority[id]) {
    return [];
  }

  return state.project.tasksByPriority[id].ids;
};

const getTaskById = (state: RootState, id: string) => state.project.tasks.byId[id];

export {
  getStatus,
  getError,
  getAllPriorityIds,
  getPriorityById,
  getPriorityTaskIdsById,
  getTaskById,
};