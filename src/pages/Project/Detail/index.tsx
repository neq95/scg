import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from 'store';
import { fetchProjectPriorities } from 'store/slices/project/detail/priorities';

const ProjectDetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {projectId} = useParams();

  useEffect(() => {
    console.log(projectId);
    if (projectId) {
      dispatch(fetchProjectPriorities({projectId}));
    }
  }, []);

  return (
    <div>

    </div>
  );
};

export default ProjectDetailPage;