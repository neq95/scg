import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TaskColumns from 'components/Task/Columns';
import ProjectTaskColumn from 'features/Project/Task/Column';

import { getAllPriorityIds } from 'store/slices/project/priorities';
import { fetchTasks } from 'store/slices/project/tasks';
import { useAppDispatch } from 'store';

const ProjectTasks: React.FC = () => {
  const {projectId} = useParams();
  const dispatch = useAppDispatch();
  const priorityIds = useSelector(getAllPriorityIds);

  useEffect(() => {
    if (projectId) {
      dispatch(fetchTasks({projectId}));
    }
  }, []);

  const renderColumn = (id: string) => {
    return <ProjectTaskColumn priorityId={id} />;
  };

  return (
    <TaskColumns columnIds={priorityIds} renderColumn={renderColumn} />
  );
};

export default ProjectTasks;