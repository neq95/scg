export const toProjectPage = (id: string) => {
  return `/project/${id}`;
};

export const toProjectTaskDetail = ({projectId, taskId}: {projectId?: string, taskId: string}) => {
  if (!projectId) {
    return taskId;
  }

  return  `project/${projectId}/${taskId}`;
};