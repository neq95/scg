import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchTasks } from 'store/slices/project/tasks';
import { useAppDispatch } from 'store';

const ProjectTasks: React.FC = () => {
  const {projectId} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (projectId) {
      dispatch(fetchTasks({projectId}));
    }
  }, []);

  return (
    <div>

    </div>
  );
};

export default ProjectTasks;