import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProjectCard from 'features/Project/Card';

import { RootState, useAppDispatch } from 'store';
import { fetchProjects } from 'store/slices/project/list';
import { getProjectIds } from 'store/slices/project/list';

const ProjectList: React.FC = () => {
  const dispatch = useAppDispatch();
  const projectIds = useSelector((state: RootState) => getProjectIds(state));

  useEffect(() => {
    dispatch(fetchProjects({from: 1, to: 20}));
  }, []);

  const renderedProjects = () => {
    return (
      <ul>
        {projectIds.map((id) => {
          return (
            <li key={id}>
              <ProjectCard id={id} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      {renderedProjects()}
    </div>
  );
};

export default ProjectList;